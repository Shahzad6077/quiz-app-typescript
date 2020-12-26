import React from 'react'
import { Box } from "@material-ui/core"
import useStyles from "./styles";


import { ReactComponent as LogoSvg } from "./../../Assets/logo.svg";

const LogoShape: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.logo}>
            <LogoSvg />
        </Box>
    )
}



export default LogoShape
