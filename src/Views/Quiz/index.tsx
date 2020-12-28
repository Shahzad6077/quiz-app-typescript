import React, { useMemo, useEffect, useState } from 'react'
import { Box, Typography, CircularProgress } from "@material-ui/core"
import useStyles from "./styles";
import { useQuizReducer } from '../../store';
import { QuizContextType, Question, QuizCTXActionCases, QuizCTXState } from "./../../Types/fetchTypes";
import { QuizViewPath } from '../../Components';

import { getQuestions } from "./../../Services/quiz";

const QuizView: React.FC = () => {
    const classes = useStyles();
    // REDUCER STATE
    const quizCTX: QuizContextType | null = useQuizReducer();
    const quizCtxState: QuizCTXState = quizCTX?.quizCtxState;
    const { categoryId, difficulty, questionsArray } = quizCtxState;

    // COMP STATE
    const [isLoading, setLoading] = useState<boolean>(true);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);


    useEffect(() => {
        // (async () => {
        //     try {
        //         const getQuestionsArray: Array<Question> = await getQuestions({
        //             amount: 10,
        //             difficulty,
        //             categoryId,
        //             type: "multiple"
        //         });

        //         quizCTX?.dispatch({
        //             type: QuizCTXActionCases.SET_QUESTIONS,
        //             payload: {
        //                 questionsArray: getQuestionsArray,
        //             }
        //         });
        //         setLoading(false)
        //     } catch (err) {
        //         console.log(err);

        //     }
        // })()
    }, [categoryId, difficulty])


    const onSubmitQuestionAnswer = () => {

    }

    console.log(questionsArray)
    const QUESTION_LENGTH = useMemo(() => questionsArray.length, [questionsArray]);
    const isShowQuizEndButton = currentQuestion === (QUESTION_LENGTH - 1);
    return (
        <Box className={classes.quizWrapper}>
            <QuizViewPath />
            <Box className={classes.typoWrapper}>
                <Box  >
                    <Typography variant="h2">Welcome</Typography>
                    <Typography variant="body2" color="textSecondary">{quizCTX?.quizCtxState.name}</Typography>
                </Box>
            </Box>

            <Box className={classes.questionWrapper}>
                {/* {isLoading && <CircularProgress size={60} color="secondary" />} */}
            </Box>

        </Box>
    )
}


export default QuizView
