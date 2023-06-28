describe("Запись (15:11:05 28.06.2023)", () => {
  it("tests Запись (15:11:05 28.06.2023)", () => {
    cy.viewport(1716, 1259);
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").click();
    cy.get("#APjFqb").type("test example");
    cy.type("{enter}");
  });
});
//# recorderSourceMap=BCBDBEBFBGBHA
