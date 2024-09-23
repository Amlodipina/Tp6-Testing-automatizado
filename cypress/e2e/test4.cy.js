describe('Delete Contact', () => {
    beforeEach(() => {
        // Paso 1: Visitar la página de autenticación
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

        // Paso 2: Realizar el proceso de autenticación
        cy.get('#email').type('juanpavd@live.com.ar'); // Ingresa tu email de autenticación
        cy.get('#password').type('1234567');      // Ingresa tu contraseña
        cy.get('button#submit').should('be.visible').click(); // Botón para iniciar sesión

        // Paso 3: Verificar que estamos en la página de la lista de contactos
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
    });

    it('should delete the last contact in the list', () => {
        // Paso 4: Seleccionar el último contacto de la lista y hacer clic
        cy.get('tr').last().click();  // Ajusta si el selector no es el correcto

        // Paso 5: Verificar que estamos en la página de "contactDetails"
        cy.url().should('include', '/contactDetails');

        // Paso 6: Hacer clic en el botón "Delete" para borrar el contacto
        cy.get('#delete').should('be.visible').click();

        // Paso 7: Verificar que el contacto ha sido eliminado (por ejemplo, verificando que ya no esté en la lista)
        cy.get('tr').last().should('not.contain', 'juandadda@lucio.com'); // Ajusta según los datos del contacto que eliminaste
    });
});
