import React, { ReactElement } from "react";
import { I18n } from "../src/interface/i18n";
import { Context } from "../src/lib/context";
import {
  DefaultButton,
  IStackTokens,
  PrimaryButton,
  Stack,
} from "@fluentui/react";

interface Props extends I18n {}
const stackTokens: IStackTokens = { childrenGap: 40 };
export default function Home({ locale }: Props): ReactElement {
  const [buttonDis, setButtonDis] = React.useState({
    disabled: false,
    checked: false,
  });

  function _alertClicked(): void {
    alert("Clicked");
  }
  React.useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton
          text="Standard"
          onClick={_alertClicked}
          allowDisabledFocus
          disabled={buttonDis.disabled}
          checked={buttonDis.checked}
        />
        <PrimaryButton
          text="Primary"
          onClick={_alertClicked}
          allowDisabledFocus
          disabled={buttonDis.disabled}
          checked={buttonDis.checked}
        />
      </Stack>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { defaultLocale, locale, locales, query } = context;
  return {
    props: { locale, query },
  };
};
