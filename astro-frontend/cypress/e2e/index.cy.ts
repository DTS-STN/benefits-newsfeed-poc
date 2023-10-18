it("loads splash page", () => {
  const page = cy.visit("/");

  page
    .get("title")
    .should("have.text", "Benefit Newsfeed | (FR) Benefit Newsfeed");
});
