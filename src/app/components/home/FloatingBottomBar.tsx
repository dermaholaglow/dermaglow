'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from 'designSystem/Buttons/Buttons';
import { Flex } from 'designSystem/Layouts/Layouts';
import { SvgWhatsapp } from 'icons/IconsDs';

export default function FloatingBottomBar() {
  const scrollPos = useRef(0);

  const [showBottomBar, setShowBottomBar] = useState(false);

  const recalculateVisibility = () => {
    setShowBottomBar(window.scrollY < 350 /* || scrollPos > window.scrollY */);
    scrollPos.current = window.scrollY;
  };

  const handleScroll = () => {
    requestAnimationFrame(() => recalculateVisibility());
  };

  useEffect(() => {
    scrollPos.current = 0;
    recalculateVisibility();

    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <div
      className={`transition-all fixed bottom-0 left-0 right-0 z-40 ${
        showBottomBar ? 'translate-y-[105%]' : 'translate-y-[0%]'
      }`}
    >
      <div className="p-4 pt-0 mx-w-xl md:mx-w-0">
        <Flex layout="row-right" className="w-full">
          <Button
            size="xl"
            type="tertiary"
            bgColor="bg-hg-primary"
            className="grow mr-4 md:hidden"
          >
            Reservar cita
          </Button>
          <Button type="primary" size="xl" customStyles="p-0 w-[64px]">
            <SvgWhatsapp />
          </Button>
        </Flex>
      </div>
    </div>
  );
}
