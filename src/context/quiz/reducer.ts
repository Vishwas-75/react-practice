import { QUESTIONS } from "src/content/question";
import { IQuestion } from "src/types/quiz";

export interface IState {
  question: string;
  key: string;
  nextKey: string | undefined;
  prevStack: string[] | [];
}

export enum EAction {
  Next = "Next",
  Prev = "Prev",
}
export interface IAction {
  type: EAction;
  value?: string;
}

export const intialState = {
  question: QUESTIONS[0].question,
  key: QUESTIONS[0].key,
  nextKey: QUESTIONS[0].nextKey,
  prevStack: [],
};

export function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case EAction.Next:
      return { ...state };
    case EAction.Prev:
      return { ...state };
    default:
      return { ...state };
  }
}
