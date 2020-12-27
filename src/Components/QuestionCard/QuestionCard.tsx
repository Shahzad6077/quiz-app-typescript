import { Paper, makeStyles, Typography, FormControlLabel, Box } from '@material-ui/core'
import React from 'react'
import { Question } from "./../../Types/fetchTypes";
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';


const CustomRadio = withStyles((theme) => ({
    root: {
        color: theme.palette.customColors?.lightPurple,
        '&$checked': {
            color: theme.palette.customColors?.purple,
        },
        "& > span:nth-child(1) > div  > svg:nth-child(2)  ": {
            fill: theme.palette.customColors?.lightPurple,
            transform: ' scale(2.2)'
        }
    },
    checked: {
        "& > span:nth-child(1) > div  > svg:nth-child(2)  ": {
            fill: theme.palette.customColors?.purple,
            transform: ' scale(1)'
        }
    },
}))((props: RadioProps) => <Radio color="default" {...props} />);



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
    }
}));

interface Props extends Question {

}
const QuestionCard: React.FC<Props> = ({ question, options, correct_answer, user_answer, id }) => {
    const classess = useStyles();
    const [selectedValue, setSelectedValue] = React.useState('a');



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const checkUserAnswer: boolean = correct_answer === user_answer;
    return (
        <Paper elevation={3} className={classess.root}>
            <Typography variant="body2">
                {question}
            </Typography>
            <Box className={classess.optionWrapper}>
                {options.map((str: string) => {
                    return (
                        <FormControlLabel
                            control={
                                <CustomRadio
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
        </Paper>
    )
}

export default QuestionCard
