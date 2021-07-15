import { ToDoComponent } from "components/core/ToDo";
import { useToDo } from "hooks/useToDo";
import { FunctionComponent } from "react";
import styled from "styled-components";

const ToDoListContainer = styled.div`
  width: 100%;
  padding: 24px;
`;

export const ToDoList: FunctionComponent = () => {
  const { todos } = useToDo();
  return (
    <ToDoListContainer>
      {todos.map((todo) => {
        return <ToDoComponent todo={todo} />;
      })}
    </ToDoListContainer>
  );
};
