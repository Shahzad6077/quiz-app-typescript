import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

import { useQuizReducer } from './store';
import { QuizContextType } from "./Types/fetchTypes";
import { HomeView, QuizView } from "./Views";
import { initPushNotifications } from "./Services/firebase"

const App: React.FC = () => {
  const quizCTX: QuizContextType | null = useQuizReducer();

  useEffect(() => {
    //initPushNotifications()
  }, [])
  return (
    <Box className="App">

      { quizCTX?.quizCtxState.isQuizStarted ?
        <QuizView />
        : <HomeView />
      }
    </Box>
  );
}

export default App;
