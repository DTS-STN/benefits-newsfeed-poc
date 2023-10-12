import { ui } from "./ui";

export function useTranslations(lang: string) {
  return function t(key: string) {
    return ui[lang][key];
  };
}
