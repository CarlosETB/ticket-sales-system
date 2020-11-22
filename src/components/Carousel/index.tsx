import React from "react";

// Components
import ItemCard from "components/ItemCard";

// Private
import { Container, Title, ExtraLink, Row } from "./styles";
import Slider, { SliderItem } from "./Slider";

interface LayoutProps {
  category?: {
    title?: string;
  };
  items?: Array<{
    id?: number;
    name?: string;
    date?: string;
    hour?: string;
  }>;
}

const Carousel: React.FC<LayoutProps> = (props) => {
  const { items } = props;


  return (
    <Container>
        <Row>
            <Title>Titulo</Title>

            <ExtraLink to='/'>
              Ver mais
            </ExtraLink>
        </Row>
    
       <Slider>
        {items?.map((item) => {
          return (
            <SliderItem key={item.id}>
              <ItemCard items={item} />
            </SliderItem>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Carousel;