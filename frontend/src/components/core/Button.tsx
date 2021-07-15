import { FunctionComponent } from "react";
import styled from "styled-components";

type ButtonProps = { text: string; onClick: () => void };

const ButtonElement = styled.button`
  font-family: ${({ theme }) => theme.fonts.family.semiBold};
  background-color: ${({ theme }) => theme.colors.BLUE};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: ${({ theme }) => theme.spacing.sm}rem;
  margin-top: ${({ theme }) => theme.spacing.md}rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs}rem;
  padding: 0 16px;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes.h6}rem;
  border-radius: 16px;
`;

export const Button: FunctionComponent<ButtonProps> = ({ text, onClick }) => {
  return <ButtonElement onClick={onClick}>{text}</ButtonElement>;
};
