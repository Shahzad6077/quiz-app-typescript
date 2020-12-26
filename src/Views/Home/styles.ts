import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    minHeight: "100vh",
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "kanno",
    flexDirection: "column",
  },
  typo: {
    color: theme.palette.customColors?.purple,
  },
  txtFieldName: {
    maxWidth: "320px",
    width: "100%",
  },
}));

export default useStyles;
