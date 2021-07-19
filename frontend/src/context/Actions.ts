import { ToDo } from "typings"

export enum ActionType {
  AddToDo,
  SetToDos,
  UpdateToDo
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
  type: ActionType.UpdateToDo,
  todo: ToDo
}

export type Actions = AddToDo | SetToDos | SetIsDoneOfToDo;