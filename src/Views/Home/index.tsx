import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';
import useStyles from "./styles";
import { HomePathShape, Logo, DropDown } from '../../Components';
import { getCategories, getQuestions } from "./../../Services/quiz";
import { Category, Difficulty, Question, QuizContextType, QuizCTXActionCases, Option } from '../../Types/fetchTypes';
import { useQuizReducer } from '../../store';

interface HomeState {
    name: string;
    categoryId: number;
    difficulty: string | keyof typeof Difficulty;
    error: string | null,
    loading: boolean
}
const DIFICULTY_ARRAY: string[] = ['Easy', 'Medium', 'Hard'];

const defaultHomeState = {
    name: '',
    categoryId: -1,
    difficulty: '',
    error: null,
    loading: false

}
const Home: React.FC = () => {
    const classes = useStyles();
    const [state, setHomeState] = useState<HomeState>(defaultHomeState);
    const [categories, setCategories] = useState<Array<Option>>([]);
    const quizCTX: QuizContextType | null = useQuizReducer();


    useEffect(() => {
        (async () => {
            try {
                const categories = await getCategories()
                setCategories([...categories].map(({ id, name }) => ({ label: name, value: id })))
            } catch (err) {
                console.log(err);

            }
        })()
    }, [])


    const onStartQuiz = async (event: React.ChangeEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const { name, categoryId, difficulty } = state;

            if (![name, difficulty].every(str => str.length)) {
                setState({ error: "Please fill all fields." });
                return;
            }

            quizCTX?.dispatch({
                type: QuizCTXActionCases.START_QUIZ,
                payload: {
                    name,
                    categoryId,
                    difficulty: difficulty.toLocaleLowerCase(),
                }
            })

        } catch (err) {
            setState({ loading: false });

        }
    }


    const setState = (obj: any) => {
        setHomeState((p) => ({ ...p, ...obj }))
    };

    const onDropDownChange = (label: string, value: any) => {
        if (label === "category") {
            setState({ categoryId: value })
        } else {
            setState({ [label]: value })
        }
    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ name: e.target.value })
    }
    return (
        <Box className={classes.homeWrapper}  >
            <HomePathShape />
            <Logo />
            {/* <Typography variant="body2" style={{ marginTop: "1rem" }}>QUIZLY</Typography> */}
            <form onSubmit={onStartQuiz}>
                <TextField
                    className={classes.txtFieldName}
                    label="Name"
                    onChange={onNameChange}
                    required={true}
                />
                <DropDown
                    options={categories}
                    changeHandler={onDropDownChange}
                    label="Category"

                />
                <DropDown
                    options={DIFICULTY_ARRAY}
                    changeHandler={onDropDownChange}
                    label="Difficulty"
                />
                {state.error && <Alert severity="error" style={{ fontFamily: "Quicksand" }} >{state.error}</Alert>}
                <Button
                    type="submit"
                    className={classes.startBtn}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Start
            </Button>
            </form>
        </Box>
    )
}



export default Home
