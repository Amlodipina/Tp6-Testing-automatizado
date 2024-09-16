class ContactPage {
    constructor() {}

    get firstNameInput() {
        return cy.get('#firstName');
    }

    get lastNameInput() {
        return cy.get('#lastName');
    }

    get birthdateInput() {
        return cy.get('#birthdate');
    }

    get emailInput() {
        return cy.get('#email');
    }

    get phoneInput() {
        return cy.get('#phone');
    }

    get street1Input() {
        return cy.get('#street1');
    }

    get street2Input() {
        return cy.get('#street2');
    }

    get cityInput() {
        return cy.get('#city');
    }

    get stateProvinceInput() {
        return cy.get('#stateProvince');
    }

    get postalCodeInput() {
        return cy.get('#postalCode');
    }

    get countryInput() {
        return cy.get('#country');
    }

    get submitButton() {
        return cy.get('#submit');
    }

    get deleteButton() {
        return cy.get('#delete');
    }

    get clickDeleteButton() {
        return this.deleteButton().click();
    }

    fillContactForm(contactData) {
        this.firstNameInput.type(contactData.firstName);
        this.lastNameInput.type(contactData.lastName);
        this.birthdateInput.type(contactData.birthdate);
        this.emailInput.type(contactData.email);
        this.phoneInput.type(contactData.phone);
        this.street1Input.type(contactData.street1);
        this.street2Input.type(contactData.street2);
        this.cityInput.type(contactData.city);
        this.stateProvinceInput.type(contactData.stateProvince);
        this.postalCodeInput.type(contactData.postalCode);
        this.countryInput.type(contactData.country);  // Para selects
    }

    submitForm() {
        this.submitButton.click();
    }
}

export default ContactPage;
