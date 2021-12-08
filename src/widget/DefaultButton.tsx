import { DefaultButton } from "@fluentui/react";
import React, { ReactElement } from "react";

interface Props {
  text?: string;
  onClick?(): void;
  allowDisabledFocus?: boolean;
}

export default function DefaultButtonUI({
  text,
  onClick,
  allowDisabledFocus,
}: Props): ReactElement {
  return (
    <DefaultButton
      text={text}
      onClick={onClick}
      allowDisabledFocus={allowDisabledFocus}
    />
  );
}
