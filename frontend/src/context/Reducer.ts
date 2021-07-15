import { ToDoState } from "typings";
import { Actions, ActionType } from "./Actions";

export const getInitialState = (): ToDoState => ({ todos: [] })

export const todoReducer = (state: ToDoState, action: Actions): ToDoState => {
  switch (action.type) {
    case ActionType.AddToDo:
      return {
        todos: [...state.todos, action.todo]
      }
    case ActionType.SetToDoAsDone:
      return {
        todos: state.todos.map((todo) => {
          return { ...todo, isDone: todo.id === action.todoId ? action.isDone : todo.isDone }
        })
      };
    case ActionType.SetToDos:
      return {
        todos: action.todos
      };
  }
}