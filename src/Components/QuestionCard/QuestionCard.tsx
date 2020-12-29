import { Paper, makeStyles, Typography, FormControlLabel, Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Question } from "./../../Types/fetchTypes";
import { Alert } from '@material-ui/lab';
import { RadioButton } from "./../";
import { FadeBox } from "./../../Utils"
import { useInterval } from "./../../Helpers/useInterval";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "max(16px , min(4vw , 2rem))",
        width: "min(100%,420px)",
        fontFamily: "Quicksand",
        boxSizing: "border-box",
        overflow: "hidden",
        "& *": {
            fontFamily: "Quicksand",
            fontWeight: 600,
        },
        "& > p": {
            fontFamily: "Quicksand",
            fontWeight: 600,
            textAlign: "center",
        },
        [theme.breakpoints.down("xs")]: {
            boxShadow: "none",
        },
        [theme.breakpoints.up("sm")]: {
            borderRadius: "3rem"
        }
    },
    optionWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem"
    },
    alertWrapper: {
        height: "52px",
        margin: "1rem 0px"
    }
}));

interface Props extends Question {
    onSubmitQuestionAnswer(ans: string): void;
    incrementForNextQuestion(): void;

}
const QuestionCard: React.FC<Props> = ({ question, options, correct_answer, user_answer, id, onSubmitQuestionAnswer, incrementForNextQuestion }) => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');
    const [isCounterStarted, setCounterStart] = useState<number | null>(null);
    const [timer, setTimer] = useState<number | null>(null);

    useInterval(() => {
        if (timer === 0) {
            setCounterStart(null);
            incrementForNextQuestion();
            setTimer(null);
        } else {
            setTimer((p) => {
                if (typeof p === 'number') {
                    return p - 1
                } else {
                    return p;
                }
            });
        }
    }, isCounterStarted)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const submitHandler = () => {
        onSubmitQuestionAnswer(selectedValue)
        setTimer(1);
        setCounterStart(1000)
    }
    const checkUserAnswer: boolean = correct_answer === user_answer;
    const checkUserSubmitAnswer = user_answer.length > 0;
    return (
        <Paper elevation={8} className={classes.root}>
            <FadeBox animateTo="down">
                <Typography variant="body2">
                    Q{id + 1}:
                    {question}
                </Typography>
            </FadeBox>
            <Box className={classes.optionWrapper}>
                {options.map((str: string, i) => {
                    return (
                        <FadeBox key={i} animateTo="left">
                            <FormControlLabel
                                disabled={checkUserSubmitAnswer}

                                control={
                                    <RadioButton
                                        checked={selectedValue === str}
                                        onChange={handleChange}
                                        value={str}
                                        name={`question-radio-${id}`}
                                        inputProps={{ 'aria-label': str }}
                                    />
                                }
                                label={str}
                            />
                        </FadeBox>
                    )
                })}
            </Box>
            <Box className={classes.alertWrapper}>
                {checkUserSubmitAnswer ?
                    (<FadeBox animateTo="up">
                        <Alert
                            severity={checkUserAnswer ? "success" : "error"}
                            style={{ fontFamily: "Quicksand" }}>
                            {checkUserAnswer ? "Correct" : "Wrong"} Answer
                        </Alert>
                    </FadeBox>
                    ) :
                    (<div style={{ display: "flex" }}>
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            style={{ width: "80px", margin: "auto", marginTop: "12px" }}
                            disabled={selectedValue.length === 0}
                            onClick={submitHandler}
                        >
                            Submit
                        </Button>
                    </div>)
                }
            </Box>
            {typeof timer === 'number' && <Typography variant="body2" >{timer}</Typography>}
        </Paper>
    )
}

export default QuestionCard
