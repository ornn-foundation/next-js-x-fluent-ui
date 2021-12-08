import { PartialTheme, ThemeProvider } from "@fluentui/react";
import React, { ReactElement } from "react";
import { Children } from "../interface";

interface Props extends Children {
  theme: PartialTheme;
}

export default function ThemeProviderUI({
  theme,
  children,
}: Props): ReactElement {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
