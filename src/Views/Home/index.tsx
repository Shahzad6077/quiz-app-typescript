import React, { useEffect, useState } from 'react'
import { Box, TextField, Typography } from "@material-ui/core"
import useStyles from "./styles";
import { HomePathShape, Logo, DropDown } from '../../Components';
import { getCategories } from "./../../Services/quiz";

interface HomeState {
    name: string;
    category: string | undefined;
    dificulty: string;
}
const DIFICULTY_ARRAY = ['easy', 'medium', 'hard'];

const defaultHomeState = {
    name: '',
    category: '',
    dificulty: DIFICULTY_ARRAY[0]

}
const Home: React.FC = () => {
    const classes = useStyles();
    const [state, setHomeState] = useState<HomeState>(defaultHomeState);
    const [categories, setCategories] = useState<string[] | []>(['']);


    useEffect(() => {
        (async () => {
            try {
                const categories = await getCategories()
                setCategories([...categories])
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])


    const setState = (obj: any) => {
        setHomeState((p) => ({ ...p, ...obj }))
    };

    const onCategoryChange = (e: React.ChangeEvent, value: string) => {
        setState({ category: value })
    }
    const onDificultyChange = (e: React.ChangeEvent, value: string) => {
        setState({ dificulty: value })
    }
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ name: e.target.value })
    }
    return (
        <Box className={classes.homeWrapper}  >
            <HomePathShape />
            <Logo />
            <Typography variant="body2" style={{ marginTop: "1rem" }}>QUIZLY</Typography>
            <TextField className={classes.txtFieldName} label="Name" onChange={onNameChange} />
            <DropDown
                options={categories}
                changeHandler={onCategoryChange}
                selectedOption={state.category}
                label="Category"
            />
            <DropDown
                options={DIFICULTY_ARRAY}
                changeHandler={onDificultyChange}
                selectedOption={state.dificulty}
                label="Difficulty"
            />
        </Box>
    )
}



export default Home
