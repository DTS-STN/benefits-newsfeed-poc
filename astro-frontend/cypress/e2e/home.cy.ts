it("loads home page in english", () => {
  const page = cy.visit("/en");
  page.get("title").should("have.text", "Benefits Newsfeed");
});

it("loads home page in french", () => {
  const page = cy.visit("/fr");
  page
    .get("title")
    .should("have.text", "Flux d'informations sur les avantages");
});

it("can toggle language to french", () => {
  const page = cy.visit("/en");
  page.get("a").contains("Français").click();
  page.url().should("equal", Cypress.config().baseUrl + "/fr");
});

it("can filter news items by search input", () => {
  const page = cy.visit("/en");
  page.get("#search").type("old age");
  page
    .get("button")
    .contains(/search/i)
    .click();
  const titles = page.get("span").contains("old age");
  page.should("not.be.empty", titles);
});

it("can filter news items by checkbox input", () => {
  const page = cy.visit("/en");
  page.get("summary").click();
  page.get("label").contains("OLD AGE SECURITY").click();
  page
    .get("button")
    .contains(/submit/i)
    .click();
  const titles = page.get("span").contains("old age");
  page.should("not.be.empty", titles);
});

it("can navigate with paginated urls", () => {
  const page = cy.visit("/en");
  page.get(`a[href="${Cypress.config().baseUrl}/en?page=2#list"]`).click();
  page.url().should("equal", Cypress.config().baseUrl + "/en?page=2#list");
});

it("can reset the filters after filtering results", () => {
  const page = cy.visit("/en");
  page.get("summary").click();
  page.get("label").contains("OLD AGE SECURITY").click();
  page.get("#search").type("EI");
  page
    .get("button")
    .contains(/submit/i)
    .click();
  page.url().should("equal", Cypress.config().baseUrl + "/en?cb1=1&search=EI");
  page.get("summary").click();
  page.get("#resetBtn").click();
  page.url().should("equal", Cypress.config().baseUrl + "/en");
});
