import React from 'react';
import useStyles from "./styles";

import { ReactComponent as LeftPathSvg } from "./../../Assets/left-path.svg";
import { ReactComponent as RightPathSvg } from "./../../Assets/right-path.svg";

const HomePathShapes: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.pathWrapper} style={{ left: 0, top: 0, position: "absolute" }}>
                <LeftPathSvg />
            </div>
            <div className={classes.pathWrapper} style={{ right: 0, bottom: 0, position: "absolute" }}>
                <RightPathSvg />
            </div>
        </React.Fragment>
    )
}



export default HomePathShapes
