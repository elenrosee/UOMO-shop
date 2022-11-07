import { Container } from "common";
import { Slider } from "components";
import { ShopColections } from "components";

export default function HomeView() {
  return (
    <Container>
      <Slider />
      <ShopColections />
    </Container>
  );
}
