import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  width: 250px;
  height: 300px;
  display: flex;
  cursor: pointer;
  flex: 0 0 250px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  flex-direction: column;
  transition: all .2s ease-in-out;
  border: 1px solid var(--blackLighter);
  box-shadow: 5px 5px 10px var(--blackLighter);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`

export const Image = styled.img`
  flex: 1;
  height: 50%;
  display: flex;
`

export const Content = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: var(--black);
`

export const Date = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--gray);
` 

export const Address = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: var(--gray);
` 