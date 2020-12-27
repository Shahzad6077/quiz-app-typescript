import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    minHeight: "100vh",
    position: "relative",

    fontFamily: "kanno",
    padding: "0px 16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.customColors?.gray,

    "& form": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  typo: {
    color: theme.palette.customColors?.purple,
  },
  txtFieldName: {
    maxWidth: "320px",
    width: "100%",
  },
  startBtn: {
    marginTop: "12px",
  },
}));

export default useStyles;
