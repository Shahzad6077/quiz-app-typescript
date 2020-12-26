import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pathWrapper: {
    position: "absolute",
    height: "100%",
    zIndex: -1,

    "& svg": {
      height: "100vh",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  },
  logo: {
    width: "max(60px, min( 6vw, 80px ))",
    height: "max(60px, min( 6vw, 80px ))",
    "& svg": {
      height: "100%",
      width: "100%",
    },
  },
}));

export default useStyles;
