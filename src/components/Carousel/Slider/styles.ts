import styled from "styled-components";

export const Container = styled.ul`
  padding: 0 20px;
  margin: 0;
  height: auto;

  .slick-prev {
    width: 35px;
    height: 100%;
  }
  .slick-next {
    width: 35px;
    height: 100%;
  }

  @media (max-width: 640px) {
    .slick-prev,
    .slick-next {
      background-color: #00000000;
    }
    .slick-prev:before,
    .slick-next:before {
      display: none;
    }
  }

  .slick-prev:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f359";
    font-size: 30px;
    font-weight: 900;
    color: var(--blackLighter);
  }
  .slick-next:before {
    font-family: "Font Awesome\ 5 Free";
    content: "\f35a";
    font-size: 30px;
    font-weight: 900;
    color: var(--blackLighter);
  }
`;

export const SliderItem = styled.li`
  padding: 20px 13px;
`;