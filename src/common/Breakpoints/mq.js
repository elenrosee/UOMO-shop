export const Breakpoints = {
  sm: 320,
  md: 1100,
  lg: 1920,
};

export const MQ = (minWidth) => {
  return `@media screen and (min-width: ${minWidth}px)`;
};

//   isMobile: useMediaQuery({ maxWidth: 1099 }),
//   isTablet: useMediaQuery({ minWidth: 772, maxWidth: 1279 }),
//   isDesctop: useMediaQuery({ minWidth: 1280 }),
