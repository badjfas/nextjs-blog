import { Box, Button, Grid, Link } from "@material-ui/core";
import React, { FC } from "react";
import { useLayoutStyles } from "./styles";
const LayoutPresenter: FC = ({ children }) => {
  const { side, header, link } = useLayoutStyles();
  return (
    <React.Fragment>
      <Grid container className={header}>
        Header Part
      </Grid>
      <Grid container wrap="nowrap">
        <Grid item xs={2} className={side}>
          <Button color="primary" href="/" className={link}>
            Menu1
          </Button>
          <Button color="primary" href="/home" className={link}>
            Menu2
          </Button>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LayoutPresenter;
