import { FC, createContext, ReactNode } from "react";
import { SliderItemsInfo } from "./Slider";

type SliderContextProps = {
  goToSlide: (number: number) => void;
  changeSlide: (direction?: number) => void;
  slidesCount: number;
  slideNumber: number;
  items: SliderItemsInfo[];
};

export const SliderContext = createContext<SliderContextProps>({
  goToSlide: () => {}, // Ваша реализация по умолчанию для goToSlide
  changeSlide: () => {}, // Ваша реализация по умолчанию для changeSlide
  slidesCount: 0,
  slideNumber: 0,
  items: [],
});

export const SliderProvider: FC<{
  value: SliderContextProps;
  children: ReactNode;
}> = ({ value, children }) => {
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
