import { Box, Grid, Link } from "@material-ui/core";
import React, { FC } from "react";
import { useLayoutStyles } from "./styles";
const LayoutPresenter: FC = ({ children }) => {
  const { side } = useLayoutStyles();
  return (
    <React.Fragment>
      <Grid container wrap="nowrap">
        <Grid item xs={2} className={side}>
          <Box>
            <Link href="/">Main</Link>
          </Box>
          <Box>
            <Link href="/home">Home</Link>
          </Box>
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LayoutPresenter;
