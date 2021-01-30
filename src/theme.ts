import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export const useGlobalStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
});

export default theme;
