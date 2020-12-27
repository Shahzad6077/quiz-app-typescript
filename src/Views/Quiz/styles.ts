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

    // background:
    //   "linear-gradient(0deg, rgba(199,168,252,1) 40%, rgba(167,106,228,1) 100%)",

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
    border: "1px solid",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
