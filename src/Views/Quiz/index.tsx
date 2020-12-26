import React from 'react'
import { Box, Typography } from "@material-ui/core"
import useStyles from "./styles";


const QuizView: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.quizWrapper}>
            <div>

            </div>
        </Box>
    )
}


export default QuizView
