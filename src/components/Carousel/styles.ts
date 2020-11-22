
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h3`
  margin: 0;
  line-height: 1;
  font-size: 35px;
  font-style: normal;
  font-weight: normal;
  color: var(--black);
`;

export const ExtraLink = styled(Link)`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3s;
  color: var(--primary);
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const Container = styled.section`
  margin-bottom: 16px;
  height: 400px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;