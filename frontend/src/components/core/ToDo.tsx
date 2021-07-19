import { useToDo } from "hooks/useToDo";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { ToDo } from "typings";
import { Checkbox } from "./Checkbox";

type ToDoProps = {
  todo: ToDo;
};

const ToDoContainer = styled.div<ToDo>`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 580px;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 16px;
  cursor: pointer;
  ${({ isDone }) =>
    isDone &&
    css`
      background-color: ${({ theme }) => theme.colors.BLUE};
      border-radius: 24px;
    `}
`;

const ToDoText = styled.span<ToDo>`
  font-size: ${({ theme }) => theme.fonts.sizes.h5}rem;
  margin-left: 16px;
  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
    `}
`;

export const ToDoComponent: FunctionComponent<ToDoProps> = ({ todo }) => {
  const { updateToDo } = useToDo();

  return (
    <ToDoContainer
      {...todo}
      onClick={() => updateToDo({ ...todo, isDone: !todo.isDone })}
    >
      <Checkbox checked={todo.isDone} readOnly />
      <ToDoText {...todo} isDone={todo.isDone}>
        {todo.text}
      </ToDoText>
    </ToDoContainer>
  );
};
