import { FunctionComponent, useRef } from "react";
import styled from "styled-components";

type CheckboxProps = React.HTMLProps<HTMLInputElement>;

const CheckboxElement = styled.input<React.HTMLProps<HTMLInputElement>>``;

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  as,
  label,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <CheckboxElement type="checkbox" {...props} ref={inputRef} />;
};
