import { ToDo } from "typings"

export enum ActionType {
  AddToDo,
  SetToDos,
  SetToDoAsDone
}

type SetToDos = {
  type: ActionType.SetToDos,
  todos: Array<ToDo>
}

type AddToDo = {
  type: ActionType.AddToDo,
  todo: ToDo
}

type SetIsDoneOfToDo = {
  type: ActionType.SetToDoAsDone,
  todoId: string,
  isDone: boolean
}

export type Actions = AddToDo | SetToDos | SetIsDoneOfToDo;