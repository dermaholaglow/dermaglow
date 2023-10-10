'use client';

import { useEffect, useState } from 'react';
import { Product } from '@interface/product';
import Dropdown from 'app/components/forms/Dropdown';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { HOLAGLOW_COLORS } from 'app/utils/colors';
import { ROUTES } from 'app/utils/routes';
import { group } from 'console';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'designSystem/Accordion/Accordion';
import { Button } from 'designSystem/Buttons/Buttons';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, Title, Underlined } from 'designSystem/Texts/Texts';
import { SvgAdd, SvgArrow, SvgInjection, SvgMinus } from 'icons/IconsDs';
import * as icon from 'icons/IconsDs';
import { isEmpty } from 'lodash';

import ProductPriceCard from './ProductPriceCard';
import ProductSessionGroupedPriceCard from './ProductSessionGroupedPriceCard';
import ProductSessionPriceCard from './ProductSessionPriceCard';

const UPGRADE_TYPES: Record<
  string,
  {
    title: string;
    icon: string;
    options: { label: string; value: string }[];
  }
> = {
  '0': {
    title: 'Ácido Hialurónico',
    icon: 'Injection',
    options: [
      {
        label: 'Aumento de labios',
        value: 'Aumento de labios',
      },
      {
        label: 'Código de barras',
        value: 'Código de barras',
      },
      {
        label: 'Proyección de mandíbula',
        value: 'Proyección de mandíbula',
      },
      {
        label: 'Proyección de mentón',
        value: 'Proyección de mentón',
      },
      {
        label: 'Proyección de Pómulos',
        value: 'Proyección de Pómulos',
      },
      {
        label: 'Relleno de ojeras',
        value: 'Relleno de ojeras',
      },
      {
        label: 'Relleno lineas marioneta',
        value: 'Relleno lineas marioneta',
      },
      {
        label: 'Rinomodelación',
        value: 'Rinomodelación',
      },
      {
        label: 'Sonrisa Gingival',
        value: 'Sonrisa Gingival',
      },
      {
        label: 'Surco Nasogeniano',
        value: 'Surco Nasogeniano',
      },
      {
        label: 'Volumen y perfilado de Cejas',
        value: 'Volumen y perfilado de Cejas',
      },
    ],
  },
  '1': {
    title: 'BabyBotox',
    icon: 'Injection',
    options: [
      { label: 'Baby botox', value: 'Baby botox' },
      {
        label: 'Arrugas entrecejo y patas de gallo',
        value: 'Arrugas entrecejo y patas de gallo',
      },
    ],
  },
  '2': {
    title: 'Botox',
    icon: 'Injection',
    options: [
      {
        label: 'Arrugas expresión: frente, entrecejo y patas de gallo',
        value: 'Arrugas expresión: frente, entrecejo y patas de gallo',
      },
    ],
  },
  '3': {
    title: 'Piel',
    icon: 'Injection',
    options: [
      {
        label: 'Hydrafacial express (1 sesión)',
        value: 'Hydrafacial express (1 sesión)',
      },
      {
        label: 'Mesoterapia (1 sesión)',
        value: 'Mesoterapia (1 sesión)',
      },
    ],
  },
  '4': {
    title: 'Piel Profunda',
    icon: 'Injection',
    options: [
      {
        label: 'Hydrafacial deluxe (1 sesión)',
        value: 'Hydrafacial deluxe (1 sesión)',
      },
      {
        label: 'Dermapen (1 sesión)',
        value: 'Dermapen (1 sesión)',
      },
    ],
  },
  '5': {
    title: 'Vitaminas',
    icon: 'Medicine',
    options: [],
  },
};

export default function ProductPrices({ product }: { product: Product }) {
  const { deviceSize } = useGlobalPersistedStore(state => state);
  const [productItems, setProductITems] = useState<any>([]);
  const [isSessionProduct, setIsSessionProduct] = useState<any>(false);
  const [groupedSessionProducts, setGroupedSessionProducts] = useState<
    Product[][] | null
  >([]);

  useEffect(() => {
    if (product.upgrades) {
      product.upgrades = product.upgrades.sort((x, y) => x.order - y.order);
      let allProducts = product.upgrades.map(item => item.product);
      setProductITems(allProducts);
    }
  }, [product]);

  useEffect(() => {
    if (!isEmpty(productItems)) {
      setIsSessionProduct(
        productItems
          .map((item: Product) => item.title)
          .every((item: string) => item.includes(product.title))
      );
    }
  }, [productItems]);

  useEffect(() => {
    function groupProductsByTitle(arr: Product[]) {
      const groupedSessionProducts: { [key: string]: Product[] } = {};

      for (const item of arr) {
        if (!groupedSessionProducts[item.title]) {
          groupedSessionProducts[item.title] = [];
        }

        groupedSessionProducts[item.title].push(item);
      }

      return Object.values(groupedSessionProducts);
    }

    const groupedArrays: Product[][] = groupProductsByTitle(productItems);

    if (groupedArrays.length !== productItems.length) {
      setGroupedSessionProducts(groupedArrays);
    }
  }, [isSessionProduct]);

  if (isEmpty(productItems)) {
    return <></>;
  }

  return (
    <div
      className="bg-gradient from-hg-secondary500 to-hg-primary300"
      id="prices"
    >
      <Container className="py-12">
        <Title size="2xl" className="font-bold mb-6 md:mb-12">
          <Underlined color={HOLAGLOW_COLORS['primary']}>
            Personaliza
          </Underlined>{' '}
          tu experiencia
        </Title>

        {!isSessionProduct && (
          <Flex layout="col-left" className="md:flex-row mb-8 gap-8">
            <Accordion
              value={deviceSize.isMobile ? 'accordion-0' : 'value'}
              className="flex flex-col gap-4 mb-8 md:flex-row md:gap-16 items-start"
            >
              {productItems.map((item: Product, index: number) => (
                <ProductPriceCard
                  key={item.title}
                  product={item}
                  index={index}
                  parentProduct={product}
                />
              ))}
            </Accordion>
          </Flex>
        )}

        {isSessionProduct && isEmpty(groupedSessionProducts) && (
          <Flex layout="col-left" className="md:flex-row mb-8 md:gap-8">
            <Flex
              layout="col-left"
              className="bg-white p-3 md:p-0 rounded-2xl w-full shadow-centered-secondary md:bg-transparent md:shadow-none"
            >
              <Text className="p-3 font-semibold md:hidden">
                {product.title}
              </Text>

              <Flex
                layout="col-left"
                className="gap-4 p-3 w-full md:flex-row md:gap-12"
              >
                {productItems.map((item: Product, index: number) => {
                  if (item.price > 0) {
                    return (
                      <ProductSessionPriceCard
                        key={item.title}
                        product={item}
                        index={index}
                      />
                    );
                  }
                })}
              </Flex>
            </Flex>
          </Flex>
        )}

        {isSessionProduct && !isEmpty(groupedSessionProducts) && (
          <Flex
            layout="col-left"
            className="w-full mb-8 gap-4 md:gap-12 md:flex-row"
          >
            {groupedSessionProducts?.map((products, productIndex) => (
              <Flex
                layout="col-left"
                className="w-full md:flex-row md:gap-8"
                key={`productGroup-${productIndex}`}
              >
                <Flex
                  layout="col-left"
                  className="bg-white p-3 rounded-2xl w-full shadow-centered-secondary "
                >
                  <Text className="p-3 font-semibold md:text-lg">
                    {products[0].title}
                  </Text>

                  <Flex layout="col-left" className="gap-4 w-full">
                    {products.map((item: Product, index: number) => {
                      if (item.price > 0) {
                        return (
                          <ProductSessionGroupedPriceCard
                            key={`product-card-${index}`}
                            product={item}
                          />
                        );
                      }
                      return null;
                    })}
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        )}
      </Container>
    </div>
  );
}
