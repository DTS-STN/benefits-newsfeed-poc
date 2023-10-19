import { test, expect } from "vitest";
import { onRequest } from "../src/middleware";

test("middleware invalid url", () => {
  expect(
    onRequest(
      { request: new Request(new URL("http://localhost:4321/en")) },
      () => null
    )
  ).toBe(null);
});

test("middleware valid url", () => {
  const res = onRequest(
    { request: new Request(new URL("http://localhost:4321/ennn")) },
    () => null
  );
  expect(res).toBeDefined();
  expect(res.status).toBe(404);
});
