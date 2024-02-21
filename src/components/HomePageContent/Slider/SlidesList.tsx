import { useContext } from "react";
import { SliderContext } from "./SliderProvider";
import { Breakpoints } from "../../../common";

import { SliderTitle } from "./SliderTitle";
import { useMediaQuery } from "react-responsive";
import { SlideImg, SlideList, SlideWraper } from "./SlidesList.styled";

export const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isDesctop = useMediaQuery({ minWidth: Breakpoints.md });

  return (
    <SlideList transform={`translateX(-${slideNumber * 100}%)`}>
      {items.map(
        ({ img, mobImg, title, accentTitle, description, link }, index) => (
          <SlideWraper key={index}>
            {isDesctop && <SlideImg src={img} alt={title} />}
            {isMobile && <SlideImg src={mobImg} alt={title} />}
            <SliderTitle
              description={description}
              title={title}
              accentTitle={accentTitle}
              link={link}
            />
          </SlideWraper>
        ),
      )}
    </SlideList>
  );
};
