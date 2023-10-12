export const languages = ["en", "fr"];
export const defaultNS = "common";

export function getOptions(lng: string, ns: string) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng: "en",
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
