export type ToDo = {
  id: string,
  text: string,
  isDone: boolean,
  createdAt: Date
}

export type ToDoState = {
  todos: Array<ToDo>
}