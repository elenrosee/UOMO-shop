import { Container } from "common";
import { Slider, TimerComponent } from "components";
import { ShopColections } from "components";
import { TrendyProducts } from "components";

export default function HomeView() {
  return (
    <Container>
      <Slider autoPlay={true} />
      <ShopColections />
      <TrendyProducts />
      <TimerComponent />
    </Container>
  );
}
