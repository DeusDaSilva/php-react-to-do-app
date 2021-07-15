import { FunctionComponent } from "react";
import styled from "styled-components";
import { AddNewToDo } from "./subcomponents/AddNewToDo";
import { ToDoList } from "./subcomponents/ToDoList";

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.BLUE};
`;

const ToDoContainer = styled.div`
  display: block;
  max-width: 700px;
  margin: auto;
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ToDoPage: FunctionComponent = () => {
  return (
    <PageContainer>
      <ToDoContainer>
        <AddNewToDo />
        <ToDoList />
      </ToDoContainer>
    </PageContainer>
  );
};
