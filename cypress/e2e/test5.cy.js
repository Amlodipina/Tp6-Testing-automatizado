describe('Logout Test', () => {
    it('should log the user out successfully', () => {
      // Visita la página de la aplicación
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      
      // Realiza el ingreso del usuario con credenciales válidas
      cy.get('input#email', { timeout: 10000 }).should('be.visible').type('emailprueba@example.com');
      cy.get('input#password', { timeout: 10000 }).should('be.visible').type('validPassword');

              // Haz clic en el botón de login
    cy.get('button#submit').should('be.visible').click();
    
    // Espera a que la URL incluya '/contactList'
    cy.url({ timeout: 15000 }).should('include', '/contactList');
    
    // Clic en el botón de logout
    cy.contains('Logout', { timeout: 10000 }).click();

    // Verifica que la URL vuelva a la página principal
    cy.url({ timeout: 15000 }).should('eq', 'https://thinking-tester-contact-list.herokuapp.com/');

    // Verifica que los campos de inicio de sesión estén visibles nuevamente
    cy.get('input#email').should('be.visible');
    cy.get('input#password').should('be.visible');
  });
});