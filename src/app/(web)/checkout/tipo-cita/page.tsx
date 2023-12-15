'use client';

import { useEffect, useState } from 'react';
import { fetchProduct } from '@utils/fetch';
import DynamicIcon from 'app/(web)/components/common/DynamicIcon';
import MainLayout from 'app/(web)/components/layout/MainLayout';
import { SvgHolaglowHand } from 'app/icons/Icons';
import { SvgArrow, SvgRadioChecked, SvgUserScan } from 'app/icons/IconsDs';
import { useSessionStore } from 'app/stores/globalStore';
import { Product } from 'app/types/product';
import { getDiscountedPrice } from 'app/utils/common';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, Title } from 'designSystem/Texts/Texts';
import { isEmpty } from 'lodash';

export default function PVCitaMedica() {
  const { selectedPacksTreatments, selectedTreatments, setSelectedTreatments } =
    useSessionStore(state => state);

  const [discountedPrice, setDiscountedPrice] = useState<null | []>(null);
  const [selectedTreatmentsData, setSelectedTreatmentsData] = useState<
    null | Product[]
  >(null);
  const [PVProduct, setPVProduct] = useState<Product | null>(null);
  const [advancedPaymentroduct, setAdvancedPaymentroduct] =
    useState<Product | null>(null);

  useEffect(() => {
    const discountedPrices: any = [];
    if (selectedTreatments && !isEmpty(selectedTreatments)) {
      selectedTreatments.map(product => {
        const discountedPrice = getDiscountedPrice(product);

        if (discountedPrice && discountedPrice !== product.price) {
          discountedPrices.push(discountedPrice);
        }
      });
    }

    setDiscountedPrice(discountedPrices);

    setSelectedTreatmentsData(selectedTreatments);
  }, [selectedTreatments]);

  useEffect(() => {
    async function initProduct(productId: string) {
      const productDetails = await fetchProduct(productId);

      if (productId === process.env.NEXT_PUBLIC_PROBADOR_VIRTUAL_ID) {
        setPVProduct(productDetails);
      }

      if (productId === process.env.NEXT_PUBLIC_ANTICIPO_ID) {
        setAdvancedPaymentroduct(productDetails);
      }
    }

    if (process.env.NEXT_PUBLIC_PROBADOR_VIRTUAL_ID) {
      initProduct(process.env.NEXT_PUBLIC_PROBADOR_VIRTUAL_ID);
    }

    if (process.env.NEXT_PUBLIC_ANTICIPO_ID) {
      initProduct(process.env.NEXT_PUBLIC_ANTICIPO_ID);
    }
  }, []);

  /*   function handleAppointment(productId: string) {
    async function initProduct(productId: string) {
      const productDetails = await fetchProduct(productId);
      setPVProduct(productDetails);
    }

    initProduct(productId);
    setSelectedTreatments([]);
  } */

  return (
    <MainLayout isCheckout>
      <Container className="mt-6 md:mt-16">
        <Flex layout="col-left" className="gap-8 md:gap-16 md:flex-row">
          <Flex layout="col-left" className="gap-6 w-full md:w-1/2">
            <Title className="font-semibold hidden md:block">
              ¿Qué tipo de cita quieres?
            </Title>

            <Flex
              className="border border-hg-black300 p-4 rounded-2xl gap-4 w-full hover:bg-hg-secondary100 cursor-pointer"
              onClick={() =>
                handleAppointment(process.env.NEXT_PUBLIC_PROBADOR_VIRTUAL_ID)
              }
            >
              <SvgUserScan className="shrink-0" />
              <div>
                <Text className="font-semibold">Primera cita</Text>
                <Text className="text-xs">
                  Te asesoramos con nuestro Escáner 3D
                </Text>
              </div>

              <Flex className="gap-2 ml-auto">
                <Text className="text-hg-secondary text-lg font-semibold">
                  Gratis
                </Text>
                <SvgArrow />
              </Flex>
            </Flex>

            <Flex className="border border-hg-black300 p-4 rounded-2xl gap-4 w-full hover:bg-hg-secondary100 cursor-pointer">
              <SvgHolaglowHand height={34} width={34} className="shrink-0" />
              <div>
                <Text className="font-semibold">Cita médica</Text>
                <Text className="text-xs">
                  Reserva cita para aplicarte el tratamiento
                </Text>
              </div>

              <Flex className="gap-2 ml-auto">
                <Text className="text-hg-secondary text-lg font-semibold shrink-0">
                  <span className="hidden lg:inline-block">Anticipo</span> 49€
                </Text>
                <SvgArrow />
              </Flex>
            </Flex>
          </Flex>
          <Flex layout="col-left" className="gap-6 w-full md:w-1/2">
            <Title className="font-semibold hidden md:block">
              Detalle de tu pedido
            </Title>

            {Array.isArray(selectedTreatmentsData) &&
              selectedTreatmentsData.map((product, index) => (
                <Flex
                  layout="col-left"
                  className="w-full bg-hg-secondary100 p-3 gap-3 rounded-xl mb-12"
                  key={product.id}
                >
                  <Flex layout="row-between" className="items-start w-full">
                    <div>
                      <Text className="font-semibold text-left mb-2">
                        {product.title}
                      </Text>

                      {product.isPack ? (
                        <ul className="p-1">
                          {selectedPacksTreatments &&
                            selectedPacksTreatments.map(item => {
                              return <li key={item.title}>- {item.title}</li>;
                            })}
                        </ul>
                      ) : !isEmpty(product.appliedProducts) ? (
                        product.appliedProducts.map(item => {
                          const iconName =
                            item.icon.split('/')[0] || 'SvgCross';
                          const iconFamily:
                            | 'default'
                            | 'category'
                            | 'suggestion'
                            | 'service' =
                            (item.icon.split('/')[1] as 'default') || 'default';

                          return (
                            <Flex
                              key={item.titlte}
                              className="items-start mb-2"
                            >
                              <DynamicIcon
                                height={16}
                                width={16}
                                className="mr-2 mt-0.5 text-hg-secondary shrink-0"
                                name={iconName}
                                family={iconFamily}
                              />

                              <Text>{item.titlte}</Text>
                            </Flex>
                          );
                        })
                      ) : (
                        <Flex className="items-start mb-2">
                          <Text>{product.description}</Text>
                        </Flex>
                      )}
                    </div>
                    <SvgRadioChecked
                      className="mt-[2px] shrink-0"
                      height={24}
                      width={24}
                    />
                  </Flex>
                  <div>
                    {discountedPrice && discountedPrice.length > 0 && (
                      <Text className="line-through text-hg-black500">
                        {product.price} €
                      </Text>
                    )}
                    <Text className=" text-hg-secondary font-semibold text-2xl">
                      {discountedPrice && discountedPrice.length > 0
                        ? discountedPrice[index]
                        : product.price}{' '}
                      €
                    </Text>
                  </div>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}
