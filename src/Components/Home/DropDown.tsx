import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Option } from "./../../Types/fetchTypes";


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

type Props = {
    options: Array<Option> | Array<string>;
    label: string;
    changeHandler(label: string, value: any): void;
}

const Dropdown: React.FC<Props> = ({ options, changeHandler, label }) => {

    const classes = useStyles();



    return (
        <Box className={classes.root}>
            <Autocomplete

                autoComplete
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label={label} margin="dense" />
                )}
                disableClearable
                fullWidth
                onChange={(event: React.ChangeEvent<{}>, option: string | Option) => {
                    if (typeof option === 'string') {
                        changeHandler(label.toLocaleLowerCase(), option)
                    } else {
                        changeHandler(label.toLocaleLowerCase(), option.value)
                    }
                }}
                options={options as any}

                getOptionLabel={(option: Option | string) => {
                    if (typeof option === 'string') {
                        return option
                    } else {
                        return option.label
                    }
                }}

            />
        </Box>
    );
};

export default Dropdown;