export const Breakpoints: { sm: number; md: number; lg: number } = {
  sm: 320,
  md: 800,
  lg: 1450,
};

export const MQ = (minWidth: number) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

export const MQmax = (minWidth: number) => {
  return `@media screen and (max-width: ${minWidth}px)`;
};

//   isMobile: useMediaQuery({ maxWidth: 1099 }),
//   isTablet: useMediaQuery({ minWidth: 772, maxWidth: 1279 }),
//   isDesctop: useMediaQuery({ minWidth: 1280 }),
