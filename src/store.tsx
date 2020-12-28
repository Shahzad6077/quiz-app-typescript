

import { useReducer, createContext, useContext } from "react";

import {
    QuizContextType,
    QuizCTXActionCases,
    Question, QuizCTXState
} from "./Types/fetchTypes";

const testing = [
    {
        "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
        "options": [
            "Bill Gates",
            "Alan Sugar",
            "Richard Branson",
            "Donald Trump"
        ],
        "correct_answer": "Richard Branson",
        "user_answer": "",
        "id": 0
    },
    {
        "question": "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
        "options": [
            "Tango",
            "Turkey",
            "Taxi",
            "Target"
        ],
        "correct_answer": "Tango",
        "user_answer": "",
        "id": 1
    },
    {
        "question": "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
        "options": [
            "Gorilla",
            "Crocodile",
            "Tiger",
            "Panda"
        ],
        "correct_answer": "Gorilla",
        "user_answer": "",
        "id": 2
    },
    {
        "question": "What do the letters in the GMT time zone stand for?",
        "options": [
            "Global Meridian Time",
            "Greenwich Mean Time",
            "Glasgow Man Time",
            "General Median Time"
        ],
        "correct_answer": "Greenwich Mean Time",
        "user_answer": "",
        "id": 3
    },
    {
        "question": "Which one of these is not a typical European sword design?",
        "options": [
            "Scimitar",
            "Falchion",
            "Ulfberht",
            "Flamberge"
        ],
        "correct_answer": "Scimitar",
        "user_answer": "",
        "id": 4
    },
    {
        "question": "What is Cynophobia the fear of?",
        "options": [
            "Flying",
            "Germs",
            "Birds",
            "Dogs"
        ],
        "correct_answer": "Dogs",
        "user_answer": "",
        "id": 5
    },
    {
        "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
        "options": [
            "Plum",
            "Pear",
            "Apple",
            "Peach"
        ],
        "correct_answer": "Plum",
        "user_answer": "",
        "id": 6
    },
    {
        "question": "Terry Gilliam was an animator that worked with which British comedy group?",
        "options": [
            "Monty Python",
            "The Penny Dreadfuls",
            "The Goodies&lrm;",
            "The League of Gentlemen&lrm;"
        ],
        "correct_answer": "Monty Python",
        "user_answer": "",
        "id": 7
    },
    {
        "question": "How many furlongs are there in a mile?",
        "options": [
            "Eight",
            "Four",
            "Two",
            "Six"
        ],
        "correct_answer": "Eight",
        "user_answer": "",
        "id": 8
    },
    {
        "question": "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
        "options": [
            "British Airways",
            "TWA",
            "Air France",
            "Swiss Air"
        ],
        "correct_answer": "Swiss Air",
        "user_answer": "",
        "id": 9
    }
];
const initialState = {
    isQuizStarted: false,
    name: 'Shahzad',
    categoryId: 0,
    difficulty: '',
    questionsArray: [...testing]
}


type Action = {
    type: QuizCTXActionCases,
    payload: any
}

interface SubmitQuestionAnsPayload {
    user_answer: string,
    questionId: number
}

const submitQuestionAns = (state: QuizCTXState, payload: SubmitQuestionAnsPayload): QuizCTXState => {
    const { questionId, user_answer } = payload;

    const shallowQuesArr = [...state.questionsArray];
    shallowQuesArr[questionId] = { ...shallowQuesArr[questionId], user_answer };
    return { ...state, questionsArray: shallowQuesArr };
}

const reducer = (state: QuizCTXState, action: Action) => {

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
        case QuizCTXActionCases.SET_QUESTIONS: {
            return { ...state, questionsArray: action.payload?.questionsArray };
        }
        case QuizCTXActionCases.SUBMIT_QUESTION_ANSWER: {
            return submitQuestionAns(state, action.payload);
        }
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