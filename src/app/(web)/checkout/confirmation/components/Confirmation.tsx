'use client';

import { useEffect } from 'react';
import { useCartStore } from 'app/(dashboard)/dashboard/(pages)/budgets/stores/userCartStore';
import { SvgCalendar } from 'app/icons/Icons';
import { SvgArrow, SvgCheck, SvgSend, SvgVideo } from 'app/icons/IconsDs';
import {
  useGlobalPersistedStore,
  useSessionStore,
} from 'app/stores/globalStore';
import { Appointment } from 'app/types/appointment';
import { AnalyticsMetrics } from 'app/types/client';
import useRoutes from 'app/utils/useRoutes';
import { Button } from 'designSystem/Buttons/Buttons';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text } from 'designSystem/Texts/Texts';

import AppointmentResume from './AppointmentResume';

export default function Confirmation({
  appointment,
  isDashboard,
  isDerma,
}: {
  appointment?: Appointment;
  isDashboard?: boolean;
  isDerma?: boolean;
}) {
  const ROUTES = useRoutes();
  const { setCurrentUser } = useGlobalPersistedStore(state => state);
  const { resetCart } = useCartStore(state => state);
  const { selectedClinic, setAnalyticsMetrics, setPayment } = useSessionStore(
    state => state
  );

  useEffect(() => {
    if (!isDashboard) {
      setCurrentUser(undefined);
      const metrics: AnalyticsMetrics = {
        device: 0,
        locPhysicalMs: '',
        utmAdgroup: '',
        utmCampaign: '',
        utmContent: '',
        utmMedium: '',
        utmSource: '',
        utmTerm: '',
        treatmentText: '',
        externalReference: '',
        interestedTreatment: '',
        treatmentPrice: 0,
      };
      setAnalyticsMetrics(metrics);
      resetCart();
      setPayment(undefined);
    }
  }, []);

  return (
    <Container className="mt-12 mb-4 md:mt-16">
      <div className="md:w-1/2 md:pr-8">
        <SvgCheck
          height={88}
          width={88}
          className={`${
            isDerma
              ? 'bg-derma-primary text-derma-primary100'
              : 'bg-hg-secondary text-hg-primary'
          } rounded-full p-3 mx-auto mb-8`}
        />
      </div>
      <div className="md:grid grid-cols-2 gap-16">
        <div className="w-full">
          <Flex layout="col-left" className="w-full items-center">
            {appointment ? (
              <>
                <Text
                  className={`${
                    isDerma
                      ? 'text-derma-primary font-gtUltraThin'
                      : 'text-hg-secondary font-semibold'
                  } text-center mb-4`}
                  size="xl"
                >
                  ¡Gracias por confirmar tu cita!
                </Text>
                <Text className="text-center hidden text-hg-black500 md:block mb-4">
                  Te esperamos el día elegido en tu clínica Holaglow. No dudes
                  en contactar con nosotros antes si tienes cualquier duda. ¡Qué
                  ganas de verte!
                </Text>
              </>
            ) : (
              <>
                <Text
                  className={`${
                    isDerma
                      ? 'text-derma-primary font-gtUltraThin'
                      : 'text-hg-secondary font-semibold'
                  } text-center mb-4`}
                  size="xl"
                >
                  ¡Gracias!
                  <br />
                  Tu cita ha sido realizada con éxito
                </Text>
                <Text className="text-center text-hg-black500 hidden md:block">
                  Nos alegramos de que confíes en nosotros para acompañarte,
                  aconsejarte y ayudarte a conseguir el efecto glow que deseas.
                  Nuestro propósito es que te mires bonito para que te sientas
                  aún mejor. ¡Qué ganas de verte!
                </Text>
              </>
            )}
          </Flex>
        </div>
        <div className="row-span-2 w-full">
          <div className="mb-8">
            {isDerma ? (
              <AppointmentResume isProbadorVirtual={false} isDerma />
            ) : (
              <AppointmentResume
                appointment={appointment}
                isProbadorVirtual
                isConfirmation
              />
            )}
          </div>

          {isDerma && (
            <Flex
              layout="col-left"
              className="gap-4 w-full border border-derma-primary100 rounded-3xl bg-white p-6 mb-12"
            >
              <Button
                size="xl"
                type="tertiary"
                className="w-full"
                customStyles="border-none bg-derma-primary text-derma-primary100 font-normal justify-start pl-2"
              >
                <Flex
                  layout="row-center"
                  className="bg-derma-primary500 rounded-full h-12 w-12 mr-2"
                >
                  <SvgVideo />
                </Flex>
                Acceso a consulta oline
              </Button>

              <Text className="text-hg-black500 text-xs mb-2">
                Te acabamos de enviar este enlace de acceso a la cita a tu
                Whatsapp y email. Si no lo recibes en los próximos minutos,
                puedes volver a enviarlo.
              </Text>

              <Button
                size="md"
                type="tertiary"
                className="w-full"
                customStyles="border-none bg-derma-secondary100 text-derma-primary font-normal justify-start pl-2"
              >
                <Flex
                  layout="row-center"
                  className="bg-derma-primary500/20 rounded-full h-8 w-8 mr-2"
                >
                  <SvgSend className="h-4 w-4" />
                </Flex>
                Volver a enviar por correo electrónico
              </Button>
              <Button
                size="md"
                type="tertiary"
                className="w-full"
                customStyles="border-none bg-derma-secondary100 text-derma-primary font-normal justify-start pl-2"
              >
                <Flex
                  layout="row-center"
                  className="bg-derma-primary500/20 rounded-full h-8 w-8 mr-2"
                >
                  <SvgCalendar className="h-4 w-4" />
                </Flex>
                Añadir a mi calendario
              </Button>
            </Flex>
          )}

          {!isDashboard && !isDerma && (
            <div className="pt-12">
              <a href="/tratamientos" className="hidden md:block">
                <Button
                  type="tertiary"
                  size="md"
                  className="hidden md:flex"
                  customStyles="group-hover:bg-hg-secondary100"
                  href={ROUTES.treatments}
                >
                  <Flex layout="row-center">
                    <span className="font-semibold">Ver tratamientos</span>
                    <SvgArrow height={18} width={18} className="ml-2" />
                  </Flex>
                </Button>
              </a>
            </div>
          )}
        </div>

        {!appointment && (
          <div className="w-full pb-4">
            <div className="w-full mb-6">
              <Text className="font-semibold text-left" size="xl">
                A partir de ahora...
              </Text>
            </div>
            <Flex
              layout="col-left"
              className="bg-hg-cream500 p-4 rounded-xl gap-4"
            >
              {[
                {
                  title: 'Confirmación de tu cita',
                  text: 'Desde este momento, estaremos en contacto contigo por teléfono para resolver todas tus dudas y confirmar la cita.',
                },
                {
                  title: 'Recomendaciones pretratamiento',
                  text: 'En la página web podrás consultar algunos consejos del equipo médico para tener en cuenta antes de tu cita.',
                },
                {
                  title: 'Distintos métodos de pago',
                  text: 'El día de tu visita a la clínica, podrás elegir el método de pago que mejor se adapte a ti, incluso financiación sin intereses.',
                },
              ].map((item, index) => (
                <Flex
                  className="border-b border-hg-secondary300 pb-4 items-start"
                  key={item.title}
                >
                  <Text
                    className={`${
                      isDerma
                        ? 'bg-derma-secondary500 text-derma-primary500'
                        : 'bg-hg-black text-hg-primary'
                    } w-6 h-6 font-semibold items-center  shrink-0 rounded-full text-center mr-2`}
                  >
                    {index + 1}
                  </Text>
                  <div className="flex flex-col">
                    <Text className="font-semibold text-sm">{item.title}</Text>
                    <Text className="text-sm text-hg-black500">
                      {item.text}
                    </Text>
                  </div>
                </Flex>
              ))}
            </Flex>

            <div className="pt-6 md:hidden">
              {!isDashboard && (
                <a href="/tratamientos">
                  <Button
                    type="tertiary"
                    size="md"
                    className="hidden md:inline"
                    customStyles="group-hover:bg-hg-secondary100"
                    href={ROUTES.treatments}
                  >
                    <Flex layout="row-center">
                      <span className="font-semibold">Ver tratamientos</span>
                      <SvgArrow height={18} width={18} className="ml-2" />
                    </Flex>
                  </Button>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
