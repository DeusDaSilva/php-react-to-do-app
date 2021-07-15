import { Button } from "components/core/Button";
import { TextInput } from "components/core/TextInput";
import { useToDo } from "hooks/useToDo";
import { FunctionComponent, useState } from "react";
import styled from "styled-components";

const TaskBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px;
`;

export const AddNewToDo: FunctionComponent = () => {
  const [todoText, setToDoText] = useState("");
  const { addToDo } = useToDo();
  return (
    <TaskBarContainer>
      <TextInput
        label="Add your todo here!"
        value={todoText}
        type="text"
        onChange={(event) => setToDoText(event.currentTarget.value)}
      />
      <Button
        text="Save"
        onClick={() => {
          addToDo(todoText);
        }}
      ></Button>
    </TaskBarContainer>
  );
};
