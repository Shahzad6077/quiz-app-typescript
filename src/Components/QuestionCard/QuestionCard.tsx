import { Paper, makeStyles, Typography, FormControlLabel, Box, Button } from '@material-ui/core'
import React from 'react'
import { Question } from "./../../Types/fetchTypes";
import { Alert } from '@material-ui/lab';
import { decode } from "js-base64"
import { RadioButton } from "./../";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        padding: "max(16px , min(4vw , 2rem))",
        width: "min(60%,420px)",
        fontFamily: "Quicksand",

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

}
const QuestionCard: React.FC<Props> = ({ question, options, correct_answer, user_answer, id }) => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('');




    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const checkUserAnswer: boolean = correct_answer === user_answer;
    const checkUserSubmitAnswer = user_answer.length > 0;
    return (
        <Paper elevation={3} className={classes.root}>
            <Typography variant="body2">
                {/* {decode(question)} */}
                {question}
            </Typography>
            <Box className={classes.optionWrapper}>
                {options.map((str: string, i) => {
                    return (
                        <FormControlLabel
                            disabled={checkUserSubmitAnswer}
                            key={i}
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
                    )
                })}
            </Box>

            {checkUserSubmitAnswer ?
                (<Box className={classes.alertWrapper}>
                    <Alert
                        severity={checkUserAnswer ? "success" : "error"}
                        style={{ fontFamily: "Quicksand" }}>
                        {checkUserAnswer ? "Correct" : "Wrong"} Answer
                    </Alert>
                </Box>) :
                (<Button
                    size="small"
                    variant="contained"
                    color="primary"
                    style={{ width: "80px", margin: "auto" }}
                    disabled={selectedValue.length === 0}
                >
                    Submit
                </Button>)
            }
        </Paper>
    )
}

export default QuestionCard
