
import React, { ReactNode } from "react";

// Native
import SlickSlider from "react-slick";

// Private
import { Container } from "./styles";

interface LayoutProps {
  children?: ReactNode;
}

const Slider: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  const settings = {
    speed: 300,
    dots: false,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
  };

  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
};

export default Slider;
export { SliderItem } from "./styles";