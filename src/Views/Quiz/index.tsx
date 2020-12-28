import React, { useMemo, useEffect, useState } from 'react'
import { Box, Typography, CircularProgress, Paper, Button } from "@material-ui/core"
import useStyles from "./styles";
import { useQuizReducer } from '../../store';
import { QuizContextType, Question, QuizCTXActionCases, QuizCTXState } from "./../../Types/fetchTypes";
import { QuizViewPath, QuestionCard } from '../../Components';

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
        (async () => {
            try {
                const getQuestionsArray: Array<Question> = await getQuestions({
                    amount: 5,
                    difficulty,
                    categoryId,
                    type: "multiple"
                });

                quizCTX?.dispatch({
                    type: QuizCTXActionCases.SET_QUESTIONS,
                    payload: {
                        questionsArray: getQuestionsArray,
                    }
                });
                setLoading(false)
            } catch (err) {
                console.log(err);

            }
        })()
    }, [categoryId, difficulty])


    const onSubmitQuestionAnswer = (ans: string) => {
        quizCTX?.dispatch({
            type: QuizCTXActionCases.SUBMIT_QUESTION_ANSWER,
            payload: {
                questionId: currentQuestion,
                user_answer: ans
            }
        });
    }
    const onQuizEndHandler = () => {
        quizCTX?.dispatch({
            type: QuizCTXActionCases.END_QUIZ,
        });
    }
    const incrementForNextQuestion = () => setCurrentQuestion((p) => p + 1);

    const calculateMarks = () => {
        let score = 0;
        questionsArray.forEach((obj) => {
            if (obj.correct_answer === obj.user_answer) {
                ++score;
            }
        })
        return score;
    }
    const QUESTION_LENGTH = useMemo(() => questionsArray.length, [questionsArray]);
    const isQustionShow = currentQuestion < QUESTION_LENGTH;
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
                {/* <QuestionCard
                    id={questionsArray[currentQuestion].id}
                    question={questionsArray[currentQuestion].question}
                    options={questionsArray[currentQuestion].options}
                    user_answer={questionsArray[currentQuestion].user_answer}
                    correct_answer={questionsArray[currentQuestion].correct_answer}
                    onSubmitQuestionAnswer={onSubmitQuestionAnswer}
                    incrementForNextQuestion={incrementForNextQuestion}
                /> */}
                {!isLoading && isQustionShow && questionsArray.map((obj, i) => {

                    if (currentQuestion !== i) {
                        return;
                    }
                    return (<QuestionCard
                        key={i}
                        id={obj.id}
                        question={obj.question}
                        options={obj.options}
                        user_answer={obj.user_answer}
                        correct_answer={obj.correct_answer}
                        onSubmitQuestionAnswer={onSubmitQuestionAnswer}
                        incrementForNextQuestion={incrementForNextQuestion}
                    />)
                }
                )}
                {
                    !isQustionShow &&
                    (<Paper elevation={8} className={classes.resultWrapper}>
                        <Typography variant="h3" color="primary" align="center" >Result</Typography>
                        <Typography variant="h5" color="primary" align="center" >{calculateMarks()}/5</Typography>
                        <Button onClick={onQuizEndHandler} variant="contained" color="primary">End</Button>
                    </Paper>)
                }
            </Box>

        </Box>
    )
}


export default QuizView


