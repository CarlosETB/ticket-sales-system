// Native
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  position: fixed;
  min-height: 10vh;
  padding: 10px 5%;
  align-items: center;
  background: var(--white);
  justify-content: space-between;
  border-bottom: 2px solid var(--primary);
`;

export const Nav = styled.nav`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.img`
  max-width: 170px;
`;

export const ButtonLink = styled(Link)`
  margin: 0 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: var(--primary);
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`