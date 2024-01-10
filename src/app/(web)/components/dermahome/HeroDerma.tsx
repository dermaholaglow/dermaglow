import { Flex } from 'designSystem/Layouts/Layouts';
import Image from 'next/image';

export default function HomeHeroDerma() {
  return (
    <Flex
      layout="col-center"
      className="bg-gradient-30deg from-[#23D9B74D] to-[#FFC7C74D] pt-16 -mt-16"
    >
      <Image
        src="/images/derma/home/homeDerma.png"
        alt="Holaglow"
        width={790}
        height={780}
        className="w-full"
      />
    </Flex>
  );
}
