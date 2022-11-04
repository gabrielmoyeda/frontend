describe('books', () => {
  it('can list, show, create, edit and delete books', () => {
    // Listar libros
    cy.visit('/')
      .get('[data-cy=link-to-books]').click()

    //crear libros
    cy.get('[href="/libros/crear"]').click()
      .get('[data-cy=input-book-title]')
      .type('New book from Cypress')
      .get('[data-cy=button-submit-book]').click()
      .get('[data-cy=book-list]')
      .contains('New book from Cypress')
    
    // Mostrar libros
    cy.get('[data-cy^=link-to-visit-book-]').last().click()
      .get('h1')
      .should('contain.text', 'New book from Cypress')
      .get('[href="/libros"]').click()
    
    // Editar Libro
    cy.get('[data-cy^=link-to-edit-book-]').last().click()
      .get('[data-cy=input-book-title]')
      .clear()
      .type('Book Edited from Cypress')
      .get('[data-cy=button-submit-book]').click()
      .get('[data-cy=book-list]')
      .contains('Book Edited from Cypress')
    
    // Eliminar libro
    cy.get('[data-cy^=link-to-delete-book-]').last().click()
      .get('[data-cy=book-list]')
      .should('not.contain.text', 'Book Edited from Cypress')
    })

})