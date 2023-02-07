import { Breakpoints, Container } from "common";
import { MobileUserMenu, Slider, TimerComponent } from "components";
import { ShopColections } from "components";
import { TrendyProducts } from "components";
import { useMediaQuery } from "react-responsive";

export default function HomeView() {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <Container>
      <Slider autoPlay={true} autoPlayTime={10000} />
      {isMobile && <MobileUserMenu />}
      <ShopColections />
      <TrendyProducts />
      <TimerComponent />
    </Container>
  );
}
