'use client';

import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, Title } from 'designSystem/Texts/Texts';
import Image from 'next/image';

import { AnimateOnViewport } from '../common/AnimateOnViewport';

export default function ValuesDescription() {
  return (
    <Container className="py-12 overflow-hidden">
      <Flex
        layout="col-left"
        className="gap-4 items-center relative md:justify-center md:flex-row"
      >
        <Flex layout="col-left" className="relative z-10 md:w-1/2">
          <Title size="2xl" className="font-bold mb-12 md:mb-6 lg:pr-[20%]">
            La belleza es lo que te dé la gana
          </Title>
          <Text className="text-hg-black500 w-1/2 md:w-full md:text-lg">
            Di adiós a los prejuicios y defiende tu propia idea de belleza con
            tratamientos eficaces para conseguir los objetivos que tú quieras.
          </Text>
        </Flex>

        <div className="relative aspect-square w-[150%] -mt-[66%] ml-[66%] md:w-1/2 md:mt-0 md:ml-0">
          <AnimateOnViewport>
            <Image
              src="/images/home/prejuiciosValue.png"
              alt="prejuicios"
              fill
              className="object-cover rounded-xl"
            />
          </AnimateOnViewport>
        </div>
      </Flex>
    </Container>
  );
}
