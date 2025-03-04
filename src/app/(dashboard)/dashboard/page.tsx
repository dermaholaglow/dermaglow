'use client';

import React, { useEffect, useState } from 'react';
import Bugsnag from '@bugsnag/js';
import ScheduleService from '@services/ScheduleService';
import UserService from '@services/UserService';
import * as config from '@utils/textConstants';
import { ERROR_GETTING_DATA } from '@utils/textConstants';
import * as utils from '@utils/validators';
import { useMessageSocket } from 'app/(dashboard)/dashboard/components/useMessageSocket';
import MainLayout from 'app/(web)/components/layout/MainLayout';
import { SvgSpinner } from 'app/icons/Icons';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { Status } from 'app/types/appointment';
import { Client } from 'app/types/client';
import { CrisalixUser } from 'app/types/crisalix';
import { MessageType } from 'app/types/messageSocket';
import { clearLocalStorage } from 'app/utils/utils';
import { Button } from 'designSystem/Buttons/Buttons';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/navigation';

import RegistrationForm from '../../(web)/components/common/RegistrationForm';
import { useCrisalix } from './(pages)/crisalix/useCrisalix';
import AppointmentsListComponent from './Appointments';
import SearchUser from './SearchUser';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [showRegistration, setShowRegistration] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const messageSocket = useMessageSocket(state => state);
  const { setCurrentUser, setAppointmentId, setBudgetId } =
    useGlobalPersistedStore(state => state);
  const {
    remoteControl,
    storedBoxId,
    storedClinicId,
    setBoxId,
    setClinicId,
    setRemoteControl,
    setIgnoreMessages,
    setClinicFlowwwId,
    setClinicProfessionalId,
  } = useGlobalPersistedStore(state => state);
  const userCrisalix = useCrisalix(state => state);

  const [formData, setFormData] = useState<Client>({
    email: '',
    phone: '',
    name: '',
    surname: '',
    secondSurname: '',
    termsAndConditionsAccepted: false,
    receiveCommunications: false,
    page: '',
    externalReference: '14',
    analyticsMetrics: {
      device: 0,
      locPhysicalMs: '',
      utmAdgroup: '',
      utmCampaign: '',
      utmContent: '',
      utmMedium: '',
      utmSource: '',
      utmTerm: '',
      treatmentText: '',
      interestedTreatment: '',
      treatmentPrice: 0,
    },
    interestedTreatment: '',
    treatmentPrice: 0,
    origin: '',
  });

  useEffect(() => {
    if (!remoteControl) {
      const existsMessageStartAppointment: any =
        messageSocket.messageSocket.filter(
          x => x.messageType == MessageType.StartAppointment
        );
      if (existsMessageStartAppointment.length > 0) {
        setIsLoadingUser(true);
        const finaldata = {
          ClinicId: existsMessageStartAppointment[0].ClinicId,
          BoxId: existsMessageStartAppointment[0].BoxId,
          AppointmentId: existsMessageStartAppointment[0].AppointmentId,
        };

        startAppointment(
          finaldata.ClinicId,
          finaldata.BoxId,
          finaldata.AppointmentId
        );
        messageSocket.removeMessageSocket(existsMessageStartAppointment[0]);
      }
    }
  }, [messageSocket]);

  async function startAppointment(
    clinicId: string,
    boxId: string,
    appointmentId: string
  ) {
    if (
      storedClinicId.toUpperCase() === clinicId.toUpperCase() &&
      String(boxId) === String(storedBoxId)
    ) {
      await redirectPageByAppointmentId('', '', appointmentId);
    }

    setIsLoadingUser(false);
  }

  useEffect(() => {
    clearLocalStorage(false);
    setBudgetId('');
    setAppointmentId('');
    setClinicProfessionalId('');
    setCurrentUser(undefined);
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    setBoxId(params.get('boxId') || '');
    setRemoteControl(params.get('remoteControl') == 'true');
    setIgnoreMessages(params.get('ignoreMessages') == 'true');
    setClinicId(params.get('clinicId') || '');
  }, []);

  async function redirectPageByAppointmentId(
    name: string,
    id: string,
    appointmentId: string
  ) {
    try {
      await ScheduleService.getClinicSchedule(appointmentId).then(
        async data => {
          if (data != null) {
            setCurrentUser(data.lead.user);
            setAppointmentId(appointmentId);
            setClinicId(data.clinic.id);
            setClinicFlowwwId(data.clinic.flowwwId);
            setClinicProfessionalId(data.clinicProfessional.id);

            if (name == '') {
              name = data.lead.user.firstName;
              id = data.lead.user.id;
            }

            if (remoteControl) {
              router.push('/dashboard/remoteControl');
            } else router.push('/dashboard/menu');
          } else {
            //TODO - Poner un mensaje de Error en UI
          }
        }
      );
    } catch (err) {
      Bugsnag.notify(ERROR_GETTING_DATA + err);
    }
  }

  const handleCheckUser = async () => {
    setIsLoading(true);
    await UserService.checkUser(userEmail)
      .then(async data => {
        if (data && !isEmpty(data)) {
          setCurrentUser(data);
          await redirectPageByflowwwToken(
            data.firstName,
            data.id,
            data.flowwwToken
          );
        } else {
          handleSearchError();
        }
      })
      .catch(error => {
        handleSearchError();
      });
    setIsLoading(false);
  };

  const handleSearchError = async () => {
    handleRequestError([config.ERROR_AUTHENTICATION]);
    setUserEmail('');
    setShowRegistration(true);
  };

  const handleRegistration = async () => {
    await registerUser(formData);
  };

  const registerUser = async (formData: Client) => {
    setIsLoading(true);
    const user = await UserService.registerUser(formData);

    if (user) {
      setCurrentUser(user);
      redirectPageByflowwwToken(
        formData.name,
        formData.id,
        formData.flowwwToken
      );
      setIsLoading(false);
    } else {
      handleRequestError([config.ERROR_REGISTRATION]);
      setIsLoading(false);
    }
  };

  async function redirectPageByflowwwToken(
    name: string,
    id: string,
    flowwwToken: string
  ) {
    try {
      await ScheduleService.getClinicScheduleByToken(flowwwToken).then(
        async data => {
          if (data != null) {
            setAppointmentId(data.id);
            setClinicId(data.clinic.id);
            setClinicFlowwwId(data.clinic.flowwwId);
            setClinicProfessionalId(data.clinicProfessional.id);

            if (name == '') {
              name = data.lead.user.firstName;
              id = data.lead.user.id;
            }

            await ScheduleService.updatePatientStatusAppointment(
              data.id,
              data.lead.user.id || '',
              Status.InProgress
            );

            await UserService.createCrisalixUser(id, data.clinic.id).then(
              async x => {
                const crisalixUser: CrisalixUser = {
                  id: x.id,
                  playerId: x.player_id,
                  playerToken: x.playerToken,
                  name: x.name,
                };
                userCrisalix.addCrisalixUser(crisalixUser);
              }
            );

            if (remoteControl) {
              router.push('/dashboard/remoteControl');
            } else router.push('/dashboard/menu');
          } else {
            //TODO - Poner un mensaje de Error en UI
          }
        }
      );
    } catch (err) {
      Bugsnag.notify(ERROR_GETTING_DATA + err);
    }
  }

  const handleFormFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleFieldEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setUserEmail(event.target.value);
  };

  const handleContinue = () => {
    setErrors([]);

    const requiredFields = ['email', 'phone', 'name', 'surname'];

    const isEmailValid = utils.validateEmail(formData.email);
    const isPhoneValid = utils.validatePhone(formData.phone);
    const areAllFieldsFilled = requiredFields.every(
      field => formData[field] !== ''
    );

    if (
      areAllFieldsFilled &&
      isEmailValid &&
      isPhoneValid &&
      formData.termsAndConditionsAccepted
    ) {
      handleRegistration();
    } else {
      const errorMessages = [];

      if (!isEmailValid && formData['email'].length > 0) {
        errorMessages.push(config.ERROR_EMAIL_NOT_VALID);
      }
      if (!isPhoneValid && formData['phone'].length > 0) {
        errorMessages.push(config.ERROR_PHONE_NOT_VALID);
      }
      if (requiredFields.some(field => formData[field] === '')) {
        errorMessages.push(config.ERROR_MISSING_FIELDS);
      }
      if (!formData.termsAndConditionsAccepted) {
        errorMessages.push(config.ERROR_TERMS_CONDITIONS_UNACCEPTED);
      }

      handleRequestError(errorMessages);
    }
  };

  const handleRequestError = (errors: Array<string>) => {
    localStorage.clear();
    setErrors(errors);
  };

  if (remoteControl)
    return (
      <MainLayout isDashboard hideBottomBar>
        <div className="px-4 w-full max-h-[85%] overflow-y-auto">
          <AppointmentsListComponent
            clinicId={storedClinicId}
            boxId={storedBoxId}
          />
        </div>
        <div className="mt-8">
          {showRegistration ? (
            <RegistrationForm
              formData={formData}
              handleFieldChange={handleFormFieldChange}
              handleContinue={handleContinue}
              errors={errors}
              isLoading={isLoading}
            />
          ) : (
            <SearchUser
              email={userEmail}
              handleFieldChange={handleFieldEmailChange}
              handleCheckUser={handleCheckUser}
              errors={errors}
              isLoading={isLoading}
            />
          )}
          {isLoadingUser && <SvgSpinner />}
        </div>
      </MainLayout>
    );

  if (!remoteControl)
    return (
      <MainLayout isDashboard hideBottomBar hasAnimatedBackground>
        <div className="fixed bottom-0 right-0 py-3 px-3">
          <Button
            onClick={() => setShowForm(!showForm)}
            type="tertiary"
            size="sm"
            className=""
          >
            Búsqueda Manual
          </Button>
        </div>
        {showForm && (
          <div className="mt-8">
            {showRegistration ? (
              <RegistrationForm
                formData={formData}
                handleFieldChange={handleFormFieldChange}
                handleContinue={handleContinue}
                errors={errors}
                isLoading={isLoading}
              />
            ) : (
              <SearchUser
                email={userEmail}
                handleFieldChange={handleFieldEmailChange}
                handleCheckUser={handleCheckUser}
                errors={errors}
                isLoading={isLoading}
              />
            )}
          </div>
        )}
        {isLoadingUser && <SvgSpinner />}
      </MainLayout>
    );
}
