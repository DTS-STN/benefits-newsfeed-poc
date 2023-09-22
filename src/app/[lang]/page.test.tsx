import { Mock, afterEach, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import data from "../../lib/data.json";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
) as Mock

afterEach(() => {
  vi.restoreAllMocks();
});

// workaround for async page renders (https://github.com/testing-library/react-testing-library/issues/1209)

test("Home Page", async () => {
  const params = { params: { lang: "en" } };
  const page = await Home(params);
  render(page);

  expect(
    screen.getByRole("heading", { level: 1, name: "Benefit News Updates" })
  ).toBeDefined();

  expect(screen.getByText("EI update")).toBeDefined();
});
