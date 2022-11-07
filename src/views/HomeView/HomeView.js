import { Container } from "common";
import { Slider } from "components";
import { ShopColections } from "components";
import { TrendyProducts } from "components";

export default function HomeView() {
  return (
    <Container>
      <Slider />
      <ShopColections />
      <TrendyProducts />
    </Container>
  );
}
