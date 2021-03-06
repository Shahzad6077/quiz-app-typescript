import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import { QuizReducerProvider } from "./store";
import theme from "./theme";
import * as serviceWorker from "./serviceWorkerRegisteration";


ReactDOM.render(
  <React.StrictMode>
    <QuizReducerProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QuizReducerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
