import { Icon } from "@fluentui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { Checkbox, PrimaryButton, Stack } from "../src/widget";

interface Props {}

export default function Home({}: Props): ReactElement {
  const router = useRouter();

  function _alertClicked(): void {
    router.push("/");
  }
  function _onChange(
    ev?: React.FormEvent<HTMLElement | HTMLInputElement>,
    isChecked?: boolean
  ) {
    console.log(`The option has been changed to ${isChecked}.`);
  }

  return (
    <div style={{ padding: 16 }}>
      <br />
      <PrimaryButton text="Back" onClick={_alertClicked} allowDisabledFocus />
      <br />
      <br />
      <Stack childrenGap={10}>
        <Checkbox
          label="Unchecked checkbox (uncontrolled)"
          onChange={_onChange}
        />
        <Checkbox
          label="Checked checkbox (uncontrolled)"
          onChange={_onChange}
          defaultChecked
        />
        <Checkbox label="Disabled checkbox" disabled />
        <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
      </Stack>
    </div>
  );
}
