import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme, { useGlobalStyles } from "../src/theme";
import { Grid } from "@material-ui/core";

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const { root } = useGlobalStyles();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container className={root}>
          <Component {...pageProps} />
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
