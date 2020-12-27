import React from 'react';
import useStyles from "./styles";

import { ReactComponent as PathSvg } from "./../../Assets/quiz-page-path.svg";

const QuizViewPath: React.FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div style={{ left: 0, top: 0, right: 0, position: "absolute", width: "100%" }}>
                <PathSvg />
            </div>
        </React.Fragment>
    )
}



export default QuizViewPath
