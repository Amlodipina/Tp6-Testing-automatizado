describe('Delete Contact', () => {
    let initialContactCount;

    beforeEach(() => {
        // Paso 1: Visitar la página de autenticación
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

        // Paso 2: Realizar el proceso de autenticación
        cy.get('#email').type('juanpavd@live.com.ar'); // Ingresa tu email de autenticación
        cy.get('#password').type('1234567');           // Ingresa tu contraseña
        cy.get('button#submit').should('be.visible').click(); // Botón para iniciar sesión

        // Paso 3: Verificar que estamos en la página de la lista de contactos
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');

        // Paso 4: Contar la cantidad de contactos antes de eliminar
        cy.get('tr').its('length').then((count) => {
            initialContactCount = count; // Guardar la cantidad inicial de contactos
        });
    });

    it('should delete the last contact in the list and verify one less in the count', () => {
        // Paso 5: Seleccionar el último contacto de la lista y hacer clic
        cy.get('tr').last().click();  // Ajusta el selector si es necesario

        // Paso 6: Verificar que estamos en la página de "contactDetails"
        cy.url().should('include', '/contactDetails');

        // Paso 7: Hacer clic en el botón "Delete" para borrar el contacto
        cy.get('#delete').should('be.visible').click();

        // Paso 8: Verificar que hemos vuelto a la página de la lista de contactos
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');

        // Paso 9: Contar la cantidad de contactos después de eliminar
        cy.get('tr').its('length').should('eq', initialContactCount - 1); // Verificar que hay un contacto menos
    });
});
