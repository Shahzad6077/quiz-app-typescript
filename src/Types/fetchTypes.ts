export interface Category {
  id: number;
  name: string;
}
export interface Question {
  question: string;
  options: Array<string>;
  correct_answer: string;
  user_answer: string;
  id: number;
}
export enum Difficulty {
  Easy = <any>"easy",
  Medium = <any>"medium",
  Hard = <any>"hard",
}
export interface Option {
  label: string;
  value: any;
}
export interface GetQuestionParams {
  amount: number;
  difficulty: string;
  categoryId: number;
  type: string;
}

export type QuestionApiResult = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};

export interface QuizContextType {
  quizCtxState: any;
  dispatch: React.Dispatch<any>;
}

export enum QuizCTXActionCases {
  START_QUIZ,
  END_QUIZ,
  SET_QUESTIONS,
  SUBMIT_QUESTION_ANSWER,
}
export interface QuizCTXState {
  isQuizStarted: boolean;
  name: string;
  categoryId: number;
  difficulty: string;
  questionsArray: Array<Question>;
}
