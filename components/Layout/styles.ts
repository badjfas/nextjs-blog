import { makeStyles } from "@material-ui/core";
export const useLayoutStyles = makeStyles({
  side: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "scroll",
    minWidth: 240,
  },
});
