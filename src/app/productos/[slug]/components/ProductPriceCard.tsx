import { useState } from 'react';
import { Product } from '@interface/product';
import Dropdown from 'app/components/forms/Dropdown';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { ROUTES } from 'app/utils/routes';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'designSystem/Accordion/Accordion';
import { Button } from 'designSystem/Buttons/Buttons';
import { Flex } from 'designSystem/Layouts/Layouts';
import { Text } from 'designSystem/Texts/Texts';
import * as icon from 'icons/IconsDs';
import { SvgAdd, SvgArrow, SvgInjection, SvgMinus } from 'icons/IconsDs';
import { isEmpty } from 'lodash';

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

function ProductPackItem({
  item,
  showDropdown = false,
}: {
  item: any;
  showDropdown?: boolean;
}) {
  const iconComponentName = `Svg${UPGRADE_TYPES[item.type.toString()].icon}`;
  const IconComponent = (icon as any)[iconComponentName] || null;

  return (
    <Flex layout="col-left" className="w-full">
      <Flex layout="row-left">
        <IconComponent
          height={16}
          width={16}
          className="text-hg-secondary mr-2"
        />
        <Text className="text-sm md:text-md">
          {UPGRADE_TYPES[item.type.toString()].title}
        </Text>
      </Flex>

      {showDropdown && (
        <Dropdown
          className="mt-2 w-full mb-4"
          options={UPGRADE_TYPES[item.type.toString()].options}
        />
      )}
    </Flex>
  );
}

export default function ProductPriceCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const { deviceSize } = useGlobalPersistedStore(state => state);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Flex className="bg-white p-3 rounded-2xl w-full shadow-centered-secondary">
      <AccordionItem
        value={deviceSize.isMobile ? `accordion-${index}` : 'value'}
      >
        <AccordionTrigger
          className={`${!deviceSize.isMobile ? 'pointer-events-none' : ''}`}
        >
          <Flex layout="col-left" className="p-3">
            <Flex layout="row-between" className="w-full">
              <Text
                size="xl"
                className="text-hg-secondary font-semibold md:text-2xl"
              >
                {product.price} €
              </Text>
              <Flex layout="row-right">
                {index === 0 ? (
                  <Text
                    size="xs"
                    className="py-1 px-2 bg-hg-pink/20 text-hg-pink rounded-md"
                  >
                    Básico
                  </Text>
                ) : product.isPack ? (
                  <Text
                    size="xs"
                    className="py-1 px-2 bg-hg-turquoise/20 text-hg-turquoise rounded-md"
                  >
                    Oferta especial
                  </Text>
                ) : (
                  <Text
                    size="xs"
                    className="py-1 px-2 bg-hg-orange/20 text-hg-orange rounded-md"
                  >
                    Upgrade
                  </Text>
                )}

                {deviceSize.isMobile && (
                  <>
                    <SvgAdd
                      height={24}
                      width={24}
                      className="ml-4 group-radix-state-open:hidden"
                    />
                    <SvgMinus
                      height={24}
                      width={24}
                      className="ml-4 hidden group-radix-state-open:block"
                    />
                  </>
                )}
              </Flex>
            </Flex>
            <Text className="font-semibold md:text-lg">{product.title}</Text>
          </Flex>
        </AccordionTrigger>

        <AccordionContent>
          <div className="bg-hg-black50 p-3 w-full rounded-xl">
            {isEmpty(product.packUnities) ? (
              <Flex layout="row-left">
                <SvgInjection
                  height={16}
                  width={16}
                  className="text-hg-secondary mr-2"
                />
                <Text size="sm">{product.description}</Text>
              </Flex>
            ) : (
              <Flex layout="col-left" className="gap-1">
                {product.packUnities.map((item, index) => (
                  <ProductPackItem
                    item={item}
                    key={index}
                    showDropdown={showDropdown}
                  />
                ))}
              </Flex>
            )}

            {product?.packMoreInformation && (
              <Accordion>
                <AccordionItem value="accordion">
                  <AccordionContent>
                    <p className="pl-5 pt-3 pb-0 text-sm md:text-md">
                      {product?.packMoreInformation}
                    </p>
                  </AccordionContent>
                  <AccordionTrigger>
                    <span className="text-hg-secondary underline block text-left pt-3 pl-5 text-sm md:text-md">
                      + info
                    </span>
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            )}

            {product.isPack ? (
              <Button
                type="tertiary"
                className="mt-4"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Seleccionar viales
              </Button>
            ) : (
              <Button
                type="tertiary"
                customStyles="bg-hg-primary md:mt-4"
                /* onClick={() => {
                    setSelectedTreatments([product]);
                  }} */
                href={ROUTES.checkout.clinics}
                className="mt-4"
              >
                Reservar cita
                <SvgArrow height={16} width={16} className="ml-2" />
              </Button>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Flex>
  );
}
