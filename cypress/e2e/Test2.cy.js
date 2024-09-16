describe('User Login', () => {
  beforeEach(() => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
  });

  it('Verify that the user can successfully log in with valid email and password credentials', () => {
    // Verifica si el campo de email está presente y visible en la página
    cy.get('input#email').should('be.visible').type('emailprueba@example.com');
    
    // Verifica si el campo de password está presente y visible en la página
    cy.get('input#password').should('be.visible').type('validPassword'); 

    // Haz clic en el botón de login
    cy.get('button#submit').should('be.visible').click(); // Si el botón tiene un id de 'submit'

    // Verificar que no hay mensajes de error después del login
    cy.get('.error-message').should('not.exist');

    // Verificar que la URL cambie al dashboard o la página que se carga después del login exitoso
    
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    //cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/dashboard');
  });
});

