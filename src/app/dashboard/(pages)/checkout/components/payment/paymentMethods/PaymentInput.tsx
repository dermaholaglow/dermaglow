import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Controller, useForm } from 'react-hook-form';
import Bugsnag from '@bugsnag/js';
import TextInputField from '@components/TextInputField';
import Notification from '@components/ui/Notification';
import { ClientUpdate } from '@interface/client';
import { CreatePayment, InitializePayment } from '@interface/initializePayment';
import { PaymentBank, PaymentMethod } from '@interface/payment';
import FinanceService from '@services/FinanceService';
import UserService from '@services/UserService';
import { applyDiscountToCart } from '@utils/utils';
import HolaglowModal from 'app/components/common/Modal';
import { useCartStore } from 'app/dashboard/(pages)/budgets/stores/userCartStore';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { Button } from 'designSystem/Buttons/Buttons';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { SvgSpinner } from 'icons/Icons';
import { isEmpty } from 'lodash';

import { usePaymentList } from '../payments/usePaymentList';
import AlmaWidget from './AlmaWidget';
import PepperWidget from './PepperWidget';

interface Props {
  paymentMethod: PaymentMethod;
  paymentBank: PaymentBank;
  onButtonClick: (newValue: boolean) => void;
}

export default function PaymentInput(props: Props) {
  const { control, handleSubmit } = useForm();
  const cart = useCartStore(state => state.cart);
  const totalAmount = usePaymentList(state => state.totalAmount);
  const { addPaymentToList } = usePaymentList();
  const [showAlma, setShowAlma] = useState(false);
  const [showPepper, setshowPepper] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageNotification, setMessageNotification] = useState<string | null>(
    null
  );
  const [showPepperModal, setShowPepperModal] = useState(false);

  const { user } = useGlobalPersistedStore(state => state);
  const [formData, setFormData] = useState<ClientUpdate>({
    dni: user?.dni ?? '',
    address: user?.address ?? '',
    city: user?.city ?? '',
    province: user?.province ?? '',
    postalCode: user?.postalCode ?? '',
    birthday: user?.birthday ?? '',
    id: user?.id ?? '',
    country: user?.country ?? '',
    firstName: user?.firstName ?? '',
    lastName: user?.lastName
      ? `${user.lastName} ${user.secondLastName ?? ''}`
      : '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
  });

  const priceDiscount = useCartStore(state => state.priceDiscount);
  const percentageDiscount = useCartStore(state => state.percentageDiscount);
  const manualPrice = useCartStore(state => state.manualPrice);

  let productsPriceTotalWithDiscounts = 0;

  if (cart) {
    productsPriceTotalWithDiscounts = cart.reduce(
      (acc, product) => acc + Number(product.priceWithDiscount),
      0
    );
  }
  const cartTotalWithDiscount = applyDiscountToCart(
    percentageDiscount,
    priceDiscount,
    manualPrice,
    productsPriceTotalWithDiscounts
  );

  const MaxValue =
    parseFloat(cartTotalWithDiscount.toFixed(2)) -
    parseFloat(totalAmount.toFixed(2));

  const createPayment = async (paymentRequestApi: CreatePayment) => {
    await FinanceService.createPayment(paymentRequestApi)
      .then(async data => {
        if (data && !isEmpty(data)) {
          const id: string = data as string;
          const paymentRequest = {
            amount: paymentRequestApi.amount,
            method: props.paymentMethod,
            bank: props.paymentBank,
            paymentReference: paymentRequestApi.referenceId,
            id: id,
          };
          addPaymentToList(paymentRequest);
        } else {
          setMessageNotification('Error creando el pago');
        }
      })
      .catch(error => {
        Bugsnag.notify('Error FinanceService.createPayment:', error);
      });
    props.onButtonClick(false);
  };

  const handleUrlPayment = async (
    idPayment: string,
    urlPayment: string,
    referencePayment: string
  ) => {
    const amount = parseFloat(inputValue);
    const paymentRequest = {
      amount: amount,
      method: props.paymentMethod,
      bank: props.paymentBank,
      paymentReference: referencePayment,
      id: idPayment,
    };
    addPaymentToList(paymentRequest);
    props.onButtonClick(false);
  };

  const activateAlma = async () => {
    if (parseFloat(inputValue) >= 50) {
      setShowAlma(!showAlma);
      setMessageNotification('');
    } else {
      setMessageNotification(
        'La cifra a financiar por alma debe ser igual o superior a 50€'
      );
    }
  };

  const activatePepper = async () => {
    setshowPepper(true);
  };

  const openPepper = () => {
    setShowPepperModal(true);
  };
  async function addPayment(number: any) {
    setIsLoading(true);
    const amount = parseFloat(number);
    const GuidUser = localStorage.getItem('id') || '';

    const paymentRequestApi = {
      amount: amount,
      userId: GuidUser,
      paymentMethod: props.paymentMethod,
      referenceId: props.paymentBank.toString(),
    };
    await createPayment(paymentRequestApi);
    setIsLoading(false);
  }
  const handleSubmitForm = async (data: any) => {
    if (showAlma || messageNotification || showPepper) {
      return;
    }
    await addPayment(data.number);
  };

  const pay = async () => {
    await addPayment(inputValue);
  };

  const initializePepper = async () => {
    const GuidUser = localStorage.getItem('id') || '';
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      ['id']: GuidUser,
    }));
    UserService.updateUser(formData).then(async x => {
      const data: InitializePayment = {
        amount: Number(inputValue),
        installments: 1,
        userId: GuidUser,
        paymentBank: 2,
      };

      await FinanceService.initializePayment(data).then(x => {
        setShowPepperModal(false);
        window.open(x.url, '_blank');
      });
    });
  };

  const handleFormFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  const renderFinance = () => {
    return (
      <>
        {showPepperModal &&
          createPortal(
            <HolaglowModal onClose={() => setShowPepperModal(false)}>
              <Container>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>Importe: {inputValue}</div>
                  <TextInputField
                    label="Nombre"
                    placeholder="Nombre"
                    value={formData.firstName}
                    onChange={event => handleFormFieldChange(event, 'name')}
                  />
                  <TextInputField
                    label="Apellidos"
                    placeholder="Apellidos"
                    value={formData.lastName}
                    onChange={event => handleFormFieldChange(event, 'surnames')}
                  />
                  <TextInputField
                    label="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={event => handleFormFieldChange(event, 'email')}
                  />
                  <TextInputField
                    label="Teléfono"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={event => handleFormFieldChange(event, 'phone')}
                  />
                  <TextInputField
                    label="Fecha nacimiento"
                    placeholder="Fecha nacimiento"
                    value={formData.birthday}
                    onChange={event => handleFormFieldChange(event, 'birthday')}
                  />
                  <TextInputField
                    label="DNI"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={event => handleFormFieldChange(event, 'dni')}
                  />
                  <TextInputField
                    label="Dirección"
                    placeholder="Dirección"
                    value={formData.address}
                    onChange={event => handleFormFieldChange(event, 'address')}
                  />
                  <TextInputField
                    label="Código Postal"
                    placeholder="Código Postal"
                    value={formData.postalCode}
                    onChange={event =>
                      handleFormFieldChange(event, 'postalCode')
                    }
                  />
                  <TextInputField
                    label="Provincia"
                    placeholder="Provincia"
                    value={formData.province}
                    onChange={event => handleFormFieldChange(event, 'province')}
                  />
                  <TextInputField
                    label="Ciudad"
                    placeholder="Ciudad"
                    value={formData.city}
                    onChange={event => handleFormFieldChange(event, 'city')}
                  />

                  <Button
                    size="sm"
                    type="secondary"
                    isSubmit
                    className="ml-2"
                    onClick={initializePepper}
                  >
                    Pagar
                  </Button>
                </div>
              </Container>
            </HolaglowModal>,
            document.body
          )}
        {showAlma && (
          <AlmaWidget
            amountFinance={inputValue}
            onUrlPayment={handleUrlPayment}
          ></AlmaWidget>
        )}
        {showPepper && (
          <Flex layout="col-left">
            <PepperWidget totalPrice={Number(inputValue)}></PepperWidget>
            <Flex className="mt-4">
              <Button
                size="sm"
                type="secondary"
                isSubmit
                className="ml-2"
                onClick={() => openPepper()}
              >
                Abrir Pepper
              </Button>
              <Button
                size="sm"
                type="secondary"
                isSubmit
                className="ml-2"
                onClick={() => pay()}
              >
                Pagar
              </Button>
            </Flex>
          </Flex>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Flex layout="col-left" className="items-start">
          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <Flex layout="row-left" className="mb-2 content-center">
                <input
                  placeholder="Importe"
                  className="bg-white border border-hg-tertiary rounded-md p-2 text-hg-black w-1/2"
                  type="number"
                  {...field}
                  onChange={e => {
                    const newValue = Math.min(
                      parseFloat(e.target.value.replace(',', '.')),
                      parseFloat(MaxValue.toFixed(2))
                    );
                    field.onChange(newValue);
                    setInputValue(newValue.toString());
                  }}
                />
                {props.paymentBank === PaymentBank.Alma && (
                  <Button
                    size="sm"
                    type="secondary"
                    isSubmit
                    className="ml-2"
                    onClick={() => activateAlma()}
                  >
                    Ver financiación
                  </Button>
                )}
                {props.paymentBank === PaymentBank.Pepper && (
                  <Button
                    size="sm"
                    type="secondary"
                    isSubmit
                    className="ml-2"
                    onClick={() => activatePepper()}
                  >
                    Ver financiación
                  </Button>
                )}
                {props.paymentBank != PaymentBank.Alma &&
                  props.paymentBank != PaymentBank.Pepper && (
                    <Button
                      size="sm"
                      type="secondary"
                      isSubmit
                      className="ml-2"
                    >
                      {isLoading ? (
                        <SvgSpinner height={24} width={24} />
                      ) : (
                        'Pagar'
                      )}
                    </Button>
                  )}
              </Flex>
            )}
          />
          {renderFinance()}
        </Flex>
      </form>
      {messageNotification ? (
        <Notification message={messageNotification} />
      ) : (
        <></>
      )}
    </>
  );
}
