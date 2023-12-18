'use client';

import { useEffect, useState } from 'react';
import RegistrationForm from 'app/(web)/components/common/RegistrationForm';
import MainLayout from 'app/(web)/components/layout/MainLayout';
import { SvgCalendar, SvgLocation } from 'app/icons/Icons';
import { useSessionStore } from 'app/stores/globalStore';
import dayjs from 'dayjs';
import spanishConf from 'dayjs/locale/es';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, Title } from 'designSystem/Texts/Texts';

import CheckoutPayment from '../components/CheckoutPayment';
import AppointmentResume from '../confirmation/components/AppointmentResume';

dayjs.locale(spanishConf);

export default function ConctactForm() {
  const { selectedTreatments, selectedSlot, selectedDay, selectedClinic } =
    useSessionStore(state => state);
  const [selectedTreatmentsNames, setSelectedTreatmentsNames] = useState('');
  const [hideLayout, setHideLayout] = useState(false);
  const [isProbadorVirtual, setisProbadorVirtual] = useState<boolean>(false);

  const localSelectedDay = dayjs(selectedDay);

  useEffect(() => {
    if (selectedTreatments && selectedTreatments.length > 0) {
      setSelectedTreatmentsNames(
        selectedTreatments!.map(x => x.title).join(' + ')
      );
    }
    if (window) {
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString);
      setHideLayout(params.get('hideLayout') == 'true');
    }

    setisProbadorVirtual(
      selectedTreatments[0].id ===
        process.env.NEXT_PUBLIC_PROBADOR_VIRTUAL_ID?.toLowerCase()
    );
  }, []);

  return (
    <MainLayout
      isCheckout={!hideLayout}
      hideHeader={hideLayout}
      hideFooter={hideLayout}
    >
      <Container className="px-0 md:mt-8 md:pb-8">
        <Flex
          layout="col-left"
          className="gap-4 md:gap-16 md:flex-row bg-hg-cream500 md:bg-transparent rounded-t-2xl pt-4 md:pt-0"
        >
          <div className="w-full md:w-1/2 md:order-2">
            <AppointmentResume isProbadorVirtual={isProbadorVirtual} />
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-8 rounded-3xl">
            <Title size="xl" className="font-semibold mb-4">
              Reserva tu cita
            </Title>

            <RegistrationForm
              redirect={hideLayout}
              hasContinueButton={isProbadorVirtual}
            />

            {!isProbadorVirtual && <CheckoutPayment className="mt-8" />}
          </div>
        </Flex>
      </Container>
      <div className="hidden md:block absolute left-0 right-0 -z-50 top-0 bottom-0">
        <div className="bg-hg-cream500 w-1/2 h-full"></div>
      </div>
    </MainLayout>
  );
}
