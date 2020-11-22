import styled, { css } from "styled-components";

export const FormFieldWrapper = styled.div`
    position: relative;
`;

export const Label = styled.label``;

export const LabelText = styled.span`
    top: 0;
    left: 16px;
    height: 57px;
    display: flex;
    font-size: 18px;
    font-weight: 300;
    position: absolute;
    font-style: normal;
    align-items: center;
    color: var(--black);
    transform-origin: 0% 0%;
    transition: 0.1s ease-in-out;
`;

interface InputProps {
    value: string[];
    small?: boolean;
}

export const Input = styled.input<InputProps>`
    border: 0;
    outline: 0;
    height: 57px;
    resize: none;
    display: block;
    font-size: 18px;
    border-radius: 4px;
    padding: 16px 16px;
    color: var(--black);
    margin-bottom: 45px;
    background: var(--grayLight);
    transition: border-color 0.3s;
    border: 1px solid var(--blackLighter);
    width: ${({ small }) => small ? '40%' : '100%'};
    &:focus {
      border-bottom: 4px solid var(--success);
    }
    ${({ value }) => {
      const hasValue = value !== "";
      return (
        hasValue &&
        css`
          &:not([type="color"]) + ${LabelText} {
            transform: scale(0.6) translateY(-10px);
          }
        `
      );
    }}
`;