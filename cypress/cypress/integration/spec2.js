describe('Teste End-to-End', () => {
  it('Teste 1: Visita Página', () => {
    // abre o site
    cy.visit('http://localhost:5000/')
  })
  it('Teste 2: Verifica item na página', () => {
    // Verifica se existe o livro desejado
    cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
  })
})