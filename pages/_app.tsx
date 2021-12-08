import React, { ReactElement } from "react";
import { AppProps } from "next/app";
import { getStorage, KEY_STORAGE } from "../src/utils/storage";
import { Context, initialState, Mode } from "../src/lib/context";
import { reducer } from "../src/lib/reducers";
import { useTheme } from "../src/utils/useTheme";
import Router, { useRouter } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import "../public/styles/global.css";
import generateTheme, { darkTheme, lightTheme } from "../src/utils/themes";
import { Loader, ThemeProvider } from "../src/widget";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

const progress = new ProgressBar({
  size: 3,
  color: "#ffc0cb",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

initializeIcons();

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  const theme = generateTheme("#FB98AD", "#323130", "#ffffff");
  React.useEffect(() => {
    const element = getStorage(KEY_STORAGE.mode);
    if (element === Mode.dark) {
      dispatch({ type: "SET_THEME_DARK" });
    } else {
      if (theme) {
        dispatch({ type: "SET_THEME_DARK" });
      } else {
        dispatch({ type: "SET_THEME_LIGHT" });
      }
    }
    setTimeout(() => {
      setPageLoading(false);
    }, 2200);
    return () => {};
  }, []);

  return (
    <>
      <Context.Provider value={value}>
        <ThemeProvider theme={theme}>
          {pageLoading && <Loader background="#ffffff" />}
          <Component {...pageProps} />
        </ThemeProvider>
      </Context.Provider>
    </>
  );
}
