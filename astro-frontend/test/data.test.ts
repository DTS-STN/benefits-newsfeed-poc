import { expect, assert, test } from "vitest";
import data from "../src/data/news_items.json";

test("should import data", () => {
  expect(data.length).toBe(10);
});

test("data should be of expected format", () => {
  assert.deepEqual(data[0], {
    program: "GUARANTEED INCOME SUPPLEMENT",
    date: "2023-04-23",
    tag: "NEW",
    en_title: "One time grant",
    en_body:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, qui?",
    fr_title: "(FR) One time grant",
    fr_body:
      "(FR) Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, qui?",
    draft: false,
  });
});
