// const { createMuiTheme } = require("@material-ui/core");
import { createMuiTheme } from "@material-ui/core";

import "@material-ui/core/styles";

interface customColors {
  purple?: string;
  black?: string;
  lightPurple?: string;
  gray?: string;
}
declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    customColors?: customColors;
  }
  interface Palette {
    customColors?: customColors;
  }
}

const themeProvider = createMuiTheme({
  palette: {
    customColors: {
      gray: "#F4F2F6",
      black: "#1a0036",
      purple: "#A76AE4",
      lightPurple: "#C7A8FC",
    },
    primary: { main: "#A76AE4" },
    secondary: { main: "#C7A8FC", contrastText: "#A76AE4" },
    text: {
      secondary: "white",
    },
  },
});

themeProvider.typography.h2 = {
  fontFamily: "kanno, 'Open Sans', sans-serif",
  color: "white",
  fontSize: "max(26px, min(6vw, 3.75rem))",
};
themeProvider.typography.h3 = {
  fontFamily: "kanno, 'Open Sans', sans-serif",
  fontSize: "max(26px, min(6vw, 2.75rem))",
};
themeProvider.typography.body1 = {
  fontFamily: "kanno, 'Open Sans', sans-serif",
  color: themeProvider.palette.customColors?.purple,
  fontSize: "max(18px, min(1.6vw, 20px))",
};
themeProvider.typography.body2 = {
  fontFamily: "kanno, 'Open Sans', sans-serif",
  color: themeProvider.palette.customColors?.purple,
  fontSize: "max(18px, min(1.6vw, 24px))",
};

export default themeProvider;
