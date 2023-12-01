import { test, expect } from "vitest";
import { useTranslations } from "../src/i18n/utils";
import { ui } from "../src/i18n/ui";

test("english translations work", () => {
  const t = useTranslations("en");
  expect(t("title")).toBe("Benefits Newsfeed");
});

test("french translations work", () => {
  const t = useTranslations("fr");
  expect(t("title")).toBe("Flux d'informations sur les avantages");
});

test("ui has english and french keys", () => {
  expect(ui).toHaveProperty("en");
  expect(ui).toHaveProperty("fr");
});