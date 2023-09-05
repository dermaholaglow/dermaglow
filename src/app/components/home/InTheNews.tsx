'use client';

import { useGlobalPersistedStore } from 'app/stores/globalStore';
import { HOLAGLOW_COLORS } from 'app/utils/colors';
import { Carousel } from 'designSystem/Carousel/Carousel';
import { Container, Flex } from 'designSystem/Layouts/Layouts';
import { Text, Title } from 'designSystem/Texts/Texts';
import { SvgHolaGlowStar } from 'icons/IconsDs';
import Image from 'next/image';

const NEWS = [
  {
    imgUrl: '/images/home/news/elpais.jpg',
    medium: 'ElPaís',
    extract:
      'Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Hac habitasse platea dictumst quisque sagittis.',
  },
  {
    imgUrl: '/images/home/news/publico.jpg',
    medium: 'publico.es',
    extract:
      'Hac habitasse platea dictumst quisque sagittis purus sit amet. Turpis tincidunt id aliquet risus feugiat. Massa enim nec dui nunc mattis enim ut tellus.',
  },
  {
    imgUrl: '/images/home/news/ara.jpg',
    medium: 'Diari Ara',
    extract:
      'Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Lectus urna duis convallis convallis. Proin sagittis nisl rhoncus mattis rhoncus urna.',
  },
];

const NewsExtract = ({
  imgUrl,
  extract,
  medium,
}: {
  extract: string;
  imgUrl: string;
  medium: string;
}) => {
  return (
    <Flex layout="col-center" className="basis-0 grow">
      <Text size="xl" className="font-semibold mb-4 text-center">
        <span className="italic">&quot; </span>
        {extract}
        <span className="italic">&quot;</span>
      </Text>
      <Image
        src={imgUrl}
        alt={medium}
        width={300}
        height={100}
        style={{
          width: '50%',
          height: 'auto',
        }}
        className="rounded-xl mb-4"
      />
    </Flex>
  );
};

export default function Testimonials() {
  const deviceSize = useGlobalPersistedStore(state => state.deviceSize);

  const visibleNews = () => {
    if (deviceSize.isMobile) {
      return 1;
    }

    if (deviceSize.isTablet) {
      return 2;
    }

    return 3;
  };

  return (
    <Container
      className={`relative pt-20 pb-12 ${
        deviceSize.isMobile ? 'overflow-hidden' : ''
      }`}
    >
      <div className="absolute top-1/3 -bottom-1/2 -left-1/2 -right-1/2 bg-hg-darkMalva100 rotate-[8deg] md:hidden"></div>

      <Title size="2xl" className="font-bold mb-20 relative">
        <SvgHolaGlowStar
          fill={HOLAGLOW_COLORS['lime']}
          className="absolute left-0 top-0 h-[250px] w-[250px] md:h-[200px] md:w-[200px] translate-x-[33%] md:-translate-x-[33%] -translate-y-[33%]"
        />
        <span className="relative">Glow in the news</span>
      </Title>
      <Carousel
        hasControls
        className="relative mb-12"
        isIntrinsicHeight
        visibleSlides={visibleNews()}
        infinite={false}
      >
        {NEWS.map(item => (
          <NewsExtract
            key={item.medium}
            imgUrl={item.imgUrl}
            medium={item.medium}
            extract={item.extract}
          />
        ))}
      </Carousel>
    </Container>
  );
}
