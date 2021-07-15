import { ActionType } from "context/Actions";
import { useToDoContext } from "context/Context";
import { ToDo } from "typings";
import { v4 as uuid } from "uuid";

type useToDoType = {
  todos: Array<ToDo>;
  setToDos: (todos: Array<ToDo>) => void;
  addToDo: (todoText: string) => void;
  setToDoAsDone: (todoId: string, isDone: boolean) => void;
};

export function useToDo(): useToDoType {
  const { todos, dispatch } = useToDoContext();

  const setToDos = async (todos: Array<ToDo>) => {
    dispatch({ type: ActionType.SetToDos, todos });
  }

  const addToDo = async (todoText: string) => {
    dispatch({
      type: ActionType.AddToDo, todo: {
        text: todoText,
        createdAt: new Date(),
        id: uuid(),
        isDone: false
      }
    });
  }

  const setToDoAsDone = async (todoId: string, isDone: boolean) => {
    dispatch({ type: ActionType.SetToDoAsDone, todoId, isDone });
  }

  return { todos, setToDos, addToDo, setToDoAsDone }
}