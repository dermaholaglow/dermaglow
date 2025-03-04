'use client';

import { SvgGoogle, SvgStar } from 'app/icons/IconsDs';
import { useSessionStore } from 'app/stores/globalStore';
import {
  DERMA_HEADER_HEIGHT_DESKTOP,
  DERMA_HEADER_HEIGHT_MOBILE,
} from 'app/utils/constants';
import { Button } from 'designSystem/Buttons/Buttons';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, TitleDerma } from 'designSystem/Texts/Texts';
import Image from 'next/image';

export default function HeroDerma() {
  const { deviceSize } = useSessionStore(state => state);

  const HEADER_HEIGHT = deviceSize.isMobile
    ? DERMA_HEADER_HEIGHT_MOBILE
    : DERMA_HEADER_HEIGHT_DESKTOP;
  const HEADER_HEIGHT_CLASS = `-${HEADER_HEIGHT}px`;

  return (
    <>
      <Flex
        layout="col-left"
        className="bg-gradient-30deg from-[#23D9B74D] to-[#FFC7C74D] pt-16 md:flex-row md:items-end overflow-hidden"
        style={{ marginTop: HEADER_HEIGHT_CLASS }}
      >
        <Image
          src="/images/derma/home/homeDerma.png"
          alt="Holaglow"
          width={912}
          height={894}
          className="md:w-2/5 xl:ml-[5%]"
        />
        <Flex
          layout="col-center"
          className="bg-derma-secondary100 md:bg-transparent relative w-full self-stretch md:justify-end lg:mr-[5%]"
        >
          <Container className="pb-12 md:p-0 overflow-hidden">
            <Flex layout="col-left" className="md:ml-8">
              <Flex
                layout="row-between"
                className="mb-4 md:order-2 w-full md:justify-start gap-4"
              >
                <Flex className="gap-2 items-center">
                  <SvgStar className="-mt-1" />
                  <span>4,7</span>
                  <SvgGoogle />
                </Flex>
                <Text className="text-hg-black400 text-xs">
                  Impulsado por Holaglow
                </Text>
              </Flex>
              <Flex
                layout="col-left"
                className="gap-4 items-center relative md:justify-center md:flex-row"
              >
                <Flex layout="col-left" className="relative z-10">
                  <TitleDerma
                    size="3xl"
                    className="text-derma-primary text-left mb-4"
                  >
                    Cuidado facial personalizado
                  </TitleDerma>
                  <Text
                    isAnimated
                    className="text-hg-black500 md:w-full lg:text-lg mb-8 lg:mb-16  "
                  >
                    Reserva tu consulta online con un dermatólogo estético y
                    encuentra el mejor tratamiento para las necesidades
                    específicas de tu piel.
                  </Text>

                  <Flex layout="row-center" className="w-full md:justify-start">
                    <Button
                      isAnimated
                      type="tertiary"
                      size="xl"
                      className="lg:mb-12"
                      customStyles="border-none bg-derma-primary text-derma-primary300"
                      href="/derma/multistep/start"
                      id={'tmevent_multistep_module'}
                    >
                      Pide tu cita online
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Flex>
    </>
  );
}
