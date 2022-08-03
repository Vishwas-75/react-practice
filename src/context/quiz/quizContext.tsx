import React, { createContext, useReducer, useContext } from "react";
import { IAction, intialState, IState, reducer } from "./reducer";

export type IContext = [IState, React.Dispatch<IAction>];
export interface Props {
  children: JSX.Element;
}

const QuizContext = createContext<IContext>([intialState, (arg) => {}]);

export const useQuiz = () => useContext(QuizContext);
export const QuizProvider = ({ children }: Props) => {
  const [state, dispatch]: IContext = useReducer(reducer, intialState);
  return (
    <QuizContext.Provider value={[state, dispatch]}>
      {children}
    </QuizContext.Provider>
  );
};
