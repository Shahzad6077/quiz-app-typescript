import React, { Fragment, useEffect, useState } from 'react'
import { Box, Typography, CircularProgress } from "@material-ui/core"
import useStyles from "./styles";
import { useQuizReducer } from '../../store';
import { QuizContextType, Question, QuizCTXActionCases } from "./../../Types/fetchTypes";
import { QuizViewPath } from '../../Components';

import { getQuestions } from "./../../Services/quiz";

const QuizView: React.FC = () => {
    const classes = useStyles();
    const quizCTX: QuizContextType | null = useQuizReducer();
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                const { difficulty, categoryId } = quizCTX?.quizCtxState;
                const questionsArray: Array<Question> = await getQuestions({
                    amount: 10,
                    difficulty,
                    categoryId,
                    type: "multiple"
                });

                quizCTX?.dispatch({
                    type: QuizCTXActionCases.SET_QUESTIONS,
                    payload: {
                        questionsArray,
                    }
                });
                setLoading(false)
            } catch (err) {
                console.log(err);

            }
        })()
    }, [])




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
                {isLoading && <CircularProgress size={60} color="secondary" />}
            </Box>

        </Box>
    )
}


export default QuizView
