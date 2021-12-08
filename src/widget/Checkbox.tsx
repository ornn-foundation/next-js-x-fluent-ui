import { Checkbox } from "@fluentui/react";
import React, { ReactElement } from "react";

interface Props {
  label?: string;
  onChange?(): void;
  disabled?: boolean;
  defaultChecked?: boolean;
}

export default function CheckboxUI({
  label,
  onChange,
  disabled,
  defaultChecked,
}: Props): ReactElement {
  return (
    <Checkbox
      label={label}
      onChange={onChange}
      disabled={disabled}
      defaultChecked={defaultChecked}
    />
  );
}
