import {
  BaseSlots,
  createTheme,
  getColorFromString,
  isDark,
  Theme,
  ThemeGenerator,
  themeRulesStandardCreator,
  PartialTheme,
} from "@fluentui/react";

export const lightTheme: PartialTheme = {
  palette: {
    themePrimary: "#ff5460",
    themeLighterAlt: "#0a0304",
    themeLighter: "#290d0f",
    themeLight: "#4d191d",
    themeTertiary: "#993239",
    themeSecondary: "#e04a54",
    themeDarkAlt: "#ff656f",
    themeDark: "#ff7d86",
    themeDarker: "#ff9fa6",
    neutralLighterAlt: "#000000",
    neutralLighter: "#000000",
    neutralLight: "#000000",
    neutralQuaternaryAlt: "#000000",
    neutralQuaternary: "#000000",
    neutralTertiaryAlt: "#000000",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#000000",
  },
};
export const darkTheme: PartialTheme = {
  palette: {
    themePrimary: "#ff5460",
    themeLighterAlt: "#0a0304",
    themeLighter: "#290d0f",
    themeLight: "#4d191d",
    themeTertiary: "#993239",
    themeSecondary: "#e04a54",
    themeDarkAlt: "#ff656f",
    themeDark: "#ff7d86",
    themeDarker: "#ff9fa6",
    neutralLighterAlt: "#000000",
    neutralLighter: "#000000",
    neutralLight: "#000000",
    neutralQuaternaryAlt: "#000000",
    neutralQuaternary: "#000000",
    neutralTertiaryAlt: "#000000",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#000000",
  },
};

const generateTheme = (
  primaryColor: string,
  textColor: string,
  backgroundColor: string
): Theme => {
  const themeRules = themeRulesStandardCreator();
  const colors = {
    pColor: getColorFromString(primaryColor)!,
    tColor: getColorFromString(textColor)!,
    bColor: getColorFromString(backgroundColor)!,
  };

  const currentIsDark = isDark(
    themeRules[BaseSlots[BaseSlots.backgroundColor]].color!
  );

  ThemeGenerator.insureSlots(themeRules, currentIsDark);
  ThemeGenerator.setSlot(
    themeRules[BaseSlots[BaseSlots.primaryColor]],
    colors.pColor,
    currentIsDark,
    true,
    true
  );
  ThemeGenerator.setSlot(
    themeRules[BaseSlots[BaseSlots.foregroundColor]],
    colors.tColor,
    currentIsDark,
    true,
    true
  );
  ThemeGenerator.setSlot(
    themeRules[BaseSlots[BaseSlots.backgroundColor]],
    colors.bColor,
    currentIsDark,
    true,
    true
  );

  const themeAsJson: {
    [key: string]: string;
  } = ThemeGenerator.getThemeAsJson(themeRules);

  const finalTheme = createTheme({
    ...{ palette: themeAsJson },
    isInverted: currentIsDark,
  });

  return finalTheme;
};

export default generateTheme;
