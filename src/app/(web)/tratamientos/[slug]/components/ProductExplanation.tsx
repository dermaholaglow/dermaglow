import { useState } from 'react';
import { AnimateOnViewport } from 'app/(web)/components/common/AnimateOnViewport';
import { SvgCheckCircle } from 'app/icons/IconsDs';
import { Product } from 'app/types/product';
import { HOLAGLOW_COLORS } from 'app/utils/colors';
import { Container } from 'designSystem/Layouts/Layouts';
import { Text, Title, Underlined } from 'designSystem/Texts/Texts';
import Image from 'next/image';

export default function ProductExplanation({ product }: { product: Product }) {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_PRODUCT_IMG_PATH}${product.flowwwId}/productAnimation.gif`
  );
  return (
    <Container className="gap-16 justify-between py-12 px-0 md:px-4 md:flex md:pb-24">
      <Container className="md:w-1/2 md:px-0 md:flex md:flex-col md:justify-start md:items-start">
        <Title isAnimated size="2xl" className="font-bold mb-6">
          <Underlined color={HOLAGLOW_COLORS['secondary700']}>
            Procedimiento
          </Underlined>{' '}
          {product.type == 2 && 'médico'}
          {product.type == 1 && 'estético'}
        </Title>
        <Text isAnimated className="text-hg-black500 mb-6">
          {product.extraInformation?.procedimentDescription}
        </Text>

        <Text isAnimated size="xl" className="mb-4 font-semibold">
          {product.extraInformation?.benefitsInformation?.title}
        </Text>
        <Text isAnimated className="text-hg-black500 mb-6">
          {product.extraInformation?.benefitsInformation?.description}
        </Text>

        <AnimateOnViewport>
          <ul className="flex flex-col gap-4 mb-6">
            {product.extraInformation?.benefitsInformation?.benefitDetails
              .sort((a, b) => a.order - b.order)
              .map(benefit => (
                <li key={benefit.id} className="flex">
                  <SvgCheckCircle className="mt-1 mr-2 shrink-0 text-hg-secondary" />
                  {benefit.title}
                </li>
              ))}
          </ul>
        </AnimateOnViewport>
      </Container>
      <div className="md:w-1/2">
        <Container className="md:px-0">
          <Text isAnimated size="xl" className="mb-4 font-semibold">
            Cuáles son las zonas de aplicación
          </Text>
          <Text isAnimated className="text-hg-black500 mb-8">
            Te explicamos las zonas de aplicación del tratamiento, aunque pueden
            variar según tus necesidades y la valoración del médico.
          </Text>
          {imgSrc && (
            <div className="relative aspect-[4/3] mb-8">
              <Image
                src={imgSrc}
                onError={() => setImgSrc('')}
                alt="fakeImg"
                fill
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          )}
          <ul className="flex flex-col mb-4 w-full">
            {product.extraInformation?.applicationZoneInfo?.applicationZoneDetail
              .sort((a, b) => a.order - b.order)
              .map((applicationZoneDetail, index) => (
                <li
                  key={applicationZoneDetail.id}
                  className="mb-6 pb-6 border-b border-hg-black flex"
                >
                  <div className="flex border border-hg-secondary rounded-full h-10 w-10 items-center justify-center text-hg-secondary mr-4 shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <Text isAnimated className="font-semibold mb-4">
                      {applicationZoneDetail.title}
                    </Text>
                    <Text isAnimated>{applicationZoneDetail.description}</Text>
                  </div>
                </li>
              ))}
          </ul>
        </Container>
      </div>
    </Container>
  );
}
