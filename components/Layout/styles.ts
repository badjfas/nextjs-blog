import { makeStyles } from "@material-ui/core";
export const useLayoutStyles = makeStyles({
  header: {
    minHeight: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  side: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    overflow: "scroll",
    minWidth: 240,
  },
  link: {
    width: 130,
  },
});
