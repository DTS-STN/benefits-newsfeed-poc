it("loads home page in english", () => {
  const page = cy.visit("/en");
  page.get("title").should("have.text", "Benefits Newsfeed");
});

it("loads home page in french", () => {
  const page = cy.visit("/fr");
  page.get("title").should("have.text", "(FR) Benefits Newsfeed");
});

it("can toggle language to french", () => {
  const page = cy.visit("/en");
  page.get("a").contains("Français").click();
  page.url().should("equal", Cypress.config().baseUrl + "/fr");
});

it("can filter news items by search input", () => {
  const page = cy.visit("/en");
  page.get("#searchDesktop").type("old age");
  page.get("button").contains("submit").click();
  const titles = page.get("span").contains("old age");
  page.should("not.be.empty", titles);
});

it("can filter news items by checkbox input", () => {
  const page = cy.visit("/en");
  page.get("label").contains("OLD AGE SECURITY").click();
  page.get("button").contains("submit").click();
  const titles = page.get("span").contains("old age");
  page.should("not.be.empty", titles);
});

it("can navigate with paginated urls", () => {
  const page = cy.visit("/en");
  page.get(`a[href="${Cypress.config().baseUrl}/en?page=2"]`).click();
  page.url().should("equal", Cypress.config().baseUrl + "/en?page=2");
});

it("can reset the filters after filtering results", () => {
  const page = cy.visit("/en");
  page.get("label").contains("OLD AGE SECURITY").click();
  page.get("#searchDesktop").type("EI");
  page.get("button").contains("submit").click();
  page
    .url()
    .should(
      "equal",
      Cypress.config().baseUrl + "/en?OLD_AGE_SECURITY=on&search=EI"
    );
  page.get("button").contains("reset").click();
  page.url().should("equal", Cypress.config().baseUrl + "/en");
});
