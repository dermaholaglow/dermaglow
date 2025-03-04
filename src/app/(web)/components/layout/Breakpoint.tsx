'use client';

export function DeviceSize() {
  const breakpoint = window.document.querySelector('#breakpoint');

  if (breakpoint) {
    const content = getComputedStyle(breakpoint, ':after').content.replace(
      /["']/g,
      ''
    );

    return {
      isMobile: content === 'sm',
      isTablet: content === 'md',
      isDesktop: content === 'lg',
      isWideScreen: content === 'xl',
    };
  }

  return {
    isMobile: true,
    isTablet: false,
    isDesktop: false,
    isWideScreen: false,
  };
}

export function Breakpoint() {
  return (
    <div
      id="breakpoint"
      className="after:content-['sm'] md:after:content-['md'] lg:after:content-['lg'] xl:after:content-['xl'] hidden"
    />
  );
}
