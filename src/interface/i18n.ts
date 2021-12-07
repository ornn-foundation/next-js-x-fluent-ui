enum Lang {
  en = "en",
  th = "th",
}

export type I18n = {
  locales?: Lang[];
  locale?: string;
  defaultLocale?: Lang;
};
