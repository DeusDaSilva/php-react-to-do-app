import { FunctionComponent, useRef } from "react";
import styled from "styled-components";

type TextInputProps = React.HTMLProps<HTMLInputElement> & { label: string };

const TextInputContainer = styled.div`
  max-width: 600px;
  width: 80%;
  margin: 8px;
`;

const TextInputElement = styled.input<React.HTMLProps<HTMLInputElement>>`
  background-color: ${({ theme }) => theme.colors.LIGHT_BACKGROUND};
  border: 1px solid ${({ theme }) => theme.colors.BLUE};
  padding: 5px;
  width: 100%;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.small}rem;
`;

export const TextInput: FunctionComponent<TextInputProps> = ({
  as,
  label,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => inputRef.current?.focus();
  return (
    <TextInputContainer onClick={handleOnClick}>
      {label && <Label>{label}</Label>}
      <TextInputElement {...props} ref={inputRef} />
    </TextInputContainer>
  );
};
