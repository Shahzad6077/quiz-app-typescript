import { Paper, makeStyles } from '@material-ui/core'
import React from 'react'
import { Question } from "./../../Types/fetchTypes";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "320px",
        width: "100%",
        marginTop: "0.6rem"
    },
}));

interface Props extends Question {

}
const QuestionCard: React.FC<Props> = ({ question, options, correct_answer, user_answer, id }) => {
    const classes = useStyles();

    const checkUserAnswer: boolean = correct_answer === user_answer;
    return (
        <Paper elevation={3}>

        </Paper>
    )
}

export default QuestionCard
