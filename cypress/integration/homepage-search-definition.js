describe('Testing Wikipedia', () => {
  it('should allow a user to search for a word', () => {
    cy.visit('https://www.wikipedia.org');
    cy.get('.other-project-link').eq(2).click();
    cy.url().should('equal', 'https://www.wiktionary.org/');
    cy.get('#searchInput').type('Svelte{enter}');
    cy.contains('Etymology');
    cy.contains('svelte');
  })
});
