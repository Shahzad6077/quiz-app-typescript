import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  quizWrapper: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "0px max(1rem, min(6vw, 4rem))",
    overflow: "hidden",
    backgroundColor: theme.palette.customColors?.gray,

    "& > *": {
      zIndex: 2,
    },
  },

  typoWrapper: {
    display: "flex",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      paddingTop: "max(1rem, min(6vw, 4rem))",
      "& > p": {
        paddingTop: "0.5rem",
      },
    },
  },
  questionWrapper: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resultWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "max(16px , min(4vw , 2rem))",
    width: "min(100%,420px)",
    fontFamily: "Quicksand",
    boxSizing: "border-box",
    overflow: "hidden",

    "& > button": {
      maxWidth: "80px",
      width: "100%",
      margin: "1rem auto",
    },
  },
}));

export default useStyles;
