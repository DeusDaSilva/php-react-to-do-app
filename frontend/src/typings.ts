export type RawToDo = {
  id: string,
  text: string,
  isDone: 0 | 1
}
export type ToDo = {
  id: string,
  text: string,
  isDone: boolean
}

export type ToDoState = {
  todos: Array<ToDo>
}