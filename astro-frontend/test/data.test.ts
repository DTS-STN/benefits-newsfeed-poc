import { expect, assert, test } from "vitest";
import data from "../src/data/news_items.json";

test("should import data", () => {
  expect(data).toBeDefined();
});

test("data should be of expected format", () => {
  assert.deepEqual(data[0], {
    program: "OLD AGE SECURITY",
    date: "2023-05-21",
    tag: "UPDATED",
    en_title: "Increase in Old Age Security (OAS) for Those 75 and Older ",
    en_body:
      "Starting July 2022, Old Age Security (OAS) pensions will automatically increase by 10% for those who are or will be 75 by June 2022. If your 75th birthday is after July 1, 2022, you'll receive this increase in the month right after you turn 75. Importantly, this 10% increase won't won't affect your Guaranteed Income Supplement (GIS). ",
    fr_title:
      "Augmentation de la Sécurité de la vieillesse (SV) pour les personnes âgées de 75 ans et plus ",
    fr_body:
      "À partir de juillet 2022, les pensions de la Sécurité de la vieillesse (SV) augmenteront automatiquement de 10 % pour ceux qui ont ou auront 75 ans d'ici juin 2022. Si votre 75e anniversaire est après le 1er juillet 2022, vous recevrez cette augmentation le mois suivant votre 75e anniversaire. Il est important de noter que cette augmentation de 10 % n'affectera pas votre Supplément de revenu garanti (SRG).",
    draft: false,
  });
});