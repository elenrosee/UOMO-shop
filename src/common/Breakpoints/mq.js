export const Breakpoints = {
  sm: 320,
  md: 800,
  lg: 1450,
};

export const MQ = (minWidth) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

export const MQmax = (minWidth) => {
  return `@media screen and (max-width: ${minWidth}px)`;
};

//   isMobile: useMediaQuery({ maxWidth: 1099 }),
//   isTablet: useMediaQuery({ minWidth: 772, maxWidth: 1279 }),
//   isDesctop: useMediaQuery({ minWidth: 1280 }),
