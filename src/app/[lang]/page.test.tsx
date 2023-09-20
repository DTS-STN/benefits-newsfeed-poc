import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

// workaround for async page renders (https://github.com/testing-library/react-testing-library/issues/1209)

test("Home Page", async () => {
  const params = { params: { lang: "en" } };
  const page = await Home(params);
  render(page);
  expect(
    screen.getByRole("heading", { level: 1, name: "Benefit News Updates" })
  ).toBeDefined();
});
