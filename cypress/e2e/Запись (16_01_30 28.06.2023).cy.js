describe("Запись (16:01:30 28.06.2023)", () => {
  it("tests Запись (16:01:30 28.06.2023)", () => {
    cy.viewport(1076, 919);
    cy.visit("https://www.google.com/");
    cy.get("div.RNNXgb > div").click();
    cy.get("#APjFqb").type("test").type("{enter}");
  });
});
