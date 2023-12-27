'use client';

import { useEffect, useState } from 'react';
import CheckoutClinicSelector from 'app/(web)/checkout/components/CheckoutClinicSelector';
import TreatmentAccordionSelector from 'app/(web)/components/common/TreatmentAccordionSelector';
import MainLayout from 'app/(web)/components/layout/MainLayout';
import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Title } from 'designSystem/Texts/Texts';
import { isEmpty } from 'lodash';

export default function Page() {
  const { stateProducts } = useGlobalPersistedStore(state => state);

  const [productCategories, setProductCategories] = useState<string[]>([]);

  useEffect(() => {
    const allCategoryNames: string[] = stateProducts.reduce(
      (categoryNames: string[], product) => {
        const productCategories = product.category.map(
          category => category.name
        );
        return [...categoryNames, ...productCategories];
      },
      []
    );

    const uniqueCategoryNames: string[] = [...new Set(allCategoryNames)];

    setProductCategories(uniqueCategoryNames);
  }, [stateProducts]);

  return (
    <MainLayout isDashboard>
      <Container className="mt-4">
        <Title className="font-semibold mb-8">
          Selecciona clínica y tratamiento
        </Title>

        <CheckoutClinicSelector isDashboard />

        <Flex layout="col-left" className="gap-3 w-full">
          {!isEmpty(productCategories) && (
            <TreatmentAccordionSelector isDashboard />
          )}
        </Flex>
      </Container>
    </MainLayout>
  );
}
