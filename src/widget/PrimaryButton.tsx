import { PrimaryButton } from "@fluentui/react";
import React, { ReactElement } from "react";

interface Props {
  text?: string;
  onClick?(): void;
  allowDisabledFocus?: boolean;
}

export default function PrimaryButtonUI({
  text,
  onClick,
  allowDisabledFocus,
}: Props): ReactElement {
  return (
    <PrimaryButton
      text={text}
      onClick={onClick}
      allowDisabledFocus={allowDisabledFocus}
    />
  );
}
