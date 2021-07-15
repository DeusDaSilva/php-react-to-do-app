import { createContext, useContext, useReducer } from "react";
import { ToDoState } from "typings";
import { Actions } from "./Actions";
import { getInitialState, todoReducer } from "./Reducer";

type ToDoContextType = ToDoState & {
  dispatch: React.Dispatch<Actions>;
};

const ToDoContext = createContext<ToDoContextType>({} as ToDoContextType);

export const ToDoProvider: React.FunctionComponent<{
  initialState?: ToDoState;
}> = ({ initialState = getInitialState(), children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <ToDoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = (): ToDoContextType =>
  useContext<ToDoContextType>(ToDoContext);
