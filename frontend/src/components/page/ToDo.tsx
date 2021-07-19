import { useToDo } from "hooks/useToDo";
import { FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { AddNewToDo } from "./subcomponents/AddNewToDo";
import { ToDoList } from "./subcomponents/ToDoList";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 32px;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

const ToDoContainer = styled.div`
  display: block;
  max-width: 700px;
  margin: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ToDoPage: FunctionComponent = () => {
  const { fetchToDos } = useToDo();

  useEffect(() => {
    fetchToDos();
    // eslint-disable-next-line
  }, []);
  return (
    <PageContainer>
      <ToDoContainer>
        <AddNewToDo />
        <ToDoList />
      </ToDoContainer>
    </PageContainer>
  );
};
