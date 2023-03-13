import { useMediaQuery } from "react-responsive";

import { Breakpoints } from "common";
import {
  Banner,
  LimitedEdition,
  MobileUserMenu,
  Slider,
  TimerComponent,
  UomoInstagram,
  ShopColections,
  Support,
  TrendyProducts,
} from "components";

export default function ShopView() {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <>
      <Slider autoPlay={true} autoPlayTime={4000} />
      {isMobile && <MobileUserMenu />}
      <ShopColections />
      <TrendyProducts />
      <TimerComponent />
      <Banner />
      <LimitedEdition />
      <UomoInstagram />
      <Support />
    </>
  );
}
