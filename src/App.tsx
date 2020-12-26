import React from 'react';
import { Box } from '@material-ui/core';

import { HomeView, QuizView } from "./Views";


const App: React.FC = () => {

  return (
    <Box className="App">
      <HomeView />
      <QuizView />
    </Box>
  );
}

export default App;
