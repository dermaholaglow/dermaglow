'use client';

import { SvgStar } from 'app/icons/IconsDs';
import { Testimonial } from 'app/types/testimonial';
import { Flex } from 'designSystem/Layouts/Layouts';
import { Text } from 'designSystem/Texts/Texts';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function TestimonialCard({
  testimonial,
  className = '',
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `flex flex-col bg-white rounded-xl p-4 overflow-hidden h-full ${className}`
      )}
    >
      <Flex className="gap-4 mb-4">
        <Image
          height={64}
          width={64}
          alt={testimonial.name}
          src={testimonial.imgUrl}
          className="shrink-0"
        />
        <Flex layout="col-left">
          <Text className="text-sm">{testimonial.city}</Text>
          <Text className="text-bold mb-2">{testimonial.name}</Text>
          <Flex className="gap-2">
            <SvgStar height={10} width={10} />
            <SvgStar height={10} width={10} />
            <SvgStar height={10} width={10} />
            <SvgStar height={10} width={10} />
            <SvgStar height={10} width={10} />
          </Flex>
        </Flex>
      </Flex>
      <Text className="text-sm text-hg-black500">
        {testimonial.testimonial}
      </Text>
    </div>
  );
}
