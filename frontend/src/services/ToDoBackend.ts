import axios from "axios"
import { RawToDo, ToDo } from "typings";

export const fetchAllToDos = async (): Promise<Array<RawToDo>> => {
  const { data, status } = await axios.get<Array<RawToDo>>('http://localhost:8081/todos');
  if (status.toString().startsWith("2")) {
    return data;
  } else {
    throw new Error('Could not fetch todos...')
  }
}

export const saveToDo = async (todo: ToDo) => {
  const { status } = await axios.post('http://localhost:8081/todos', {
    ...todo,
    isDone: (todo.isDone) ? 1 : 0
  });

  if (!status.toString().startsWith("2")) {
    throw new Error('Could not fetch todos...')
  }
}

export const updateToDo = async (todo: ToDo) => {
  const { status } = await axios.put('http://localhost:8081/todos', {
    ...todo,
    isDone: (todo.isDone) ? 1 : 0
  });

  if (!status.toString().startsWith("2")) {
    throw new Error('Could not fetch todos...')
  }
}