
import { useReducer, createContext, useContext } from "react";


const initialState = {
    isQuizStarted: false,
    name: '',
    category: '',
    difficulty: ''
}

type State = {
    isQuizStarted: boolean,
    name: string,
    category: string,
    difficulty: string
}
type Action = {
    type: string,
    payload: any
}
const reducer = (state: State, action: Action) => {

    switch (action.type) {
        default:
            return state
    }
}

type Props = {
    children: React.ReactNode
}
type QuizContextType = {
    state: any,
    dispatch: React.Dispatch<any>
} | null;

const QuizContext = createContext<QuizContextType>(null);

export const QuizReducerProvider: React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return <QuizContext.Provider value={{ state, dispatch }} >
        {children}
    </QuizContext.Provider >;
}
export const useQuizReducer = () => useContext(QuizContext);