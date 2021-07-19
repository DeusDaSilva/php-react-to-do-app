import { ActionType } from "context/Actions";
import { useToDoContext } from "context/Context";
import { ToDo } from "typings";
import { v4 as uuid } from "uuid";
import { fetchAllToDos, saveToDo, updateToDo as updateTodoBackend } from 'services/ToDoBackend';
import { toast } from "react-toastify";

type useToDoType = {
  todos: Array<ToDo>;
  fetchToDos: () => void;
  addToDo: (todoText: string) => void;
  updateToDo: (todo: ToDo) => void;
};

export function useToDo(): useToDoType {
  const { todos, dispatch } = useToDoContext();

  const fetchToDos = async () => {
    try {
      const rawToDos = await fetchAllToDos();

      const todos: Array<ToDo> = rawToDos.map((rawToDo) => {
        return { ...rawToDo, isDone: (rawToDo.isDone === 1) ? true : false }
      })
      dispatch({ type: ActionType.SetToDos, todos: todos })
    } catch (e) {
      console.log(e);
      toast(`Error occured! Error: ${e}`, { type: "error" })
    }
  }

  const addToDo = async (todoText: string) => {
    try {
      const todo = {
        text: todoText,
        id: uuid(),
        isDone: false
      }
      await saveToDo(todo);
      dispatch({
        type: ActionType.AddToDo, todo: todo
      });
      toast(`Saved todo!`);
    } catch (e) {
      console.log(e);
      toast(`Error occured! Error: ${e}`, { type: "error" })
    }
  }

  const updateToDo = async (todo: ToDo) => {
    try {
      await updateTodoBackend(todo);
      dispatch({ type: ActionType.UpdateToDo, todo });
      toast(`Updated todo!`);
    } catch (e) {
      console.log(e);
      toast(`Error occured! Error: ${e}`, { type: "error" })
    }

  }

  return { todos, fetchToDos, addToDo, updateToDo }
}