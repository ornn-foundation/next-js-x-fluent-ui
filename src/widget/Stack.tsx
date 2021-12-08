import React, { ReactElement } from "react";
import { IStackTokens, Stack } from "@fluentui/react";
import { Children } from "../interface";

interface Props extends Children, IStackTokens {
  horizontal?: boolean;
}
const stackTokens: IStackTokens = { childrenGap: 40 };
export default function StackUI({
  horizontal,
  children,
  childrenGap,
}: Props): ReactElement {
  return (
    <Stack horizontal={horizontal} tokens={{ childrenGap }}>
      {children}
    </Stack>
  );
}
