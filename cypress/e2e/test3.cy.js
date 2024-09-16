describe('User Registration Form', () => {
  it('should allow the user to submit the form successfully with valid data', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');

    // Generar un correo electrónico único para cada prueba
    const randomEmail = `lucio.m+${Date.now()}@example.com`;

    // Llenar el formulario
    cy.get('#firstName').type('Lucio');
    cy.get('#lastName').type('Malgioglio');
    cy.get('#email').type(randomEmail);
    cy.get('#password').type('tp6IngSw');

    // Enviar el formulario
    cy.get('#submit').click();

    // Esperar la redirección y verificar que el mensaje de éxito esté visible
    cy.url().should('include', '/contactList');
    cy.get('#add-contact').should('be.visible');
  });
});
