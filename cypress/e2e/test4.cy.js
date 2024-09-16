import ContactPage from '../pages/contactPage';

describe('Add Contact Form', () => {
    let contactPage;

    beforeEach(() => {
        // Paso 1: Visitar la página de autenticación
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');

        // Paso 2: Realizar el proceso de autenticación (ajusta los selectores según sea necesario)
        cy.get('#email').type('juanpavd@live.com.ar'); // Ingresa tu email de autenticación
        cy.get('#password').type('1234567');      // Ingresa tu contraseña
        cy.get('button#submit').should('be.visible').click(); // Si el botón tiene un id de 'submit'        // Botón para iniciar sesión

        // Paso 3: Esperar a que la página de contacto se cargue
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');
        
        // Paso 4: Seleccionar el contacto Juan Dadda
        cy.contains('juandadda@lucio.com').click();

        // Paso 5: Verificar que estamos en la página de "contactDetails"
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactDetails');
       
        // Paso final: Hacer clic en el botón "Delete" para borrar al contacto
        cy.get('#delete').should('be.visible').click();

        // Crear una instancia de la página del formulario de contacto
        contactPage = new ContactPage();
    });

    it('should successfully submit the form with all required fields filled in correctly', () => {
        const contactData = {
        };

        // Llenar el formulario de contacto
        contactPage.fillContactForm(contactData);
        contactPage.submitForm();

        // Verificar que no haya errores al enviar el formulario
        cy.get('#error').should('not.exist');
    });
});
