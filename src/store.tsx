

import { useReducer, createContext, useContext } from "react";

import {
    QuizContextType,
    QuizCTXActionCases,
    Question
} from "./Types/fetchTypes";

const initialState = {
    isQuizStarted: false,
    name: 'Shahzad',
    categoryId: 0,
    difficulty: '',
    questionsArray: []
}

type State = {
    isQuizStarted: boolean,
    name: string,
    categoryId: number,
    difficulty: string,
    questionsArray: Array<Question>
}
type Action = {
    type: QuizCTXActionCases,
    payload: any
}

const reducer = (state: State, action: Action) => {

    switch (action.type) {
        case QuizCTXActionCases.START_QUIZ: {
            return {
                ...state,
                isQuizStarted: true,
                name: action.payload?.name,
                categoryId: action.payload?.categoryId,
                difficulty: action.payload?.difficulty,
            };
        }
        // case QuizCTXActionCases.SET_QUESTIONS: {
        //     return { ...state, questionsArray: action.payload?.questionsArray };
        // }
        case QuizCTXActionCases.END_QUIZ: {
            return initialState;
        }
        default:
            return state
    }
}

type Props = {
    children: React.ReactNode
}


const QuizContext = createContext<QuizContextType | null>(null);

export const QuizReducerProvider: React.FC<Props> = ({ children }) => {

    const [quizCtxState, dispatch] = useReducer(reducer, initialState);


    return <QuizContext.Provider value={{ quizCtxState, dispatch }} >
        {children}
    </QuizContext.Provider >;
}
export const useQuizReducer = () => useContext(QuizContext);