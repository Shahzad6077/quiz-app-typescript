import React from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

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
    options: Array<string>;
    selectedOption: string | undefined;
    label: string;
    changeHandler(event: React.ChangeEvent<{}>, value: string): void;
}

const Dropdown: React.FC<Props> = ({ options, changeHandler, label, selectedOption }) => {

    const classes = useStyles();

    const defaultProps = {
        options: options,
    };

    return (
        <Box className={classes.root}>
            <Autocomplete
                {...defaultProps}
                autoComplete
                includeInputInList
                renderInput={(params) => (
                    <TextField {...params} label={label} margin="dense" />
                )}
                disableClearable
                fullWidth
                onChange={(event: React.ChangeEvent<{}>, value: string) => changeHandler(event, value)}
                value={selectedOption}

            />
        </Box>
    );
};

export default Dropdown;