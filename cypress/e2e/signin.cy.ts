import { faker } from '@faker-js/faker';
import { openPage, signInPage } from '../support/index';

describe('signin', () => {
    const username = `${faker.internet.userName()}_${Date.now()}`;
    const email = `${username}@example.com`;
    const password = '123456';

    beforeEach(() => {
        openPage.openLoginPage();
    });
    

    it('signin assert failure', () => { 
        cy.intercept({ method: 'POST', url: 'https://murmuring-ravine-01051.herokuapp.com/api/auth'}).as('authRequest');
        signInPage.signIn(email, password);
        cy.get<{ response }>('@authRequest').then(data => {
            const statusCode = data.response.statusCode;
            cy.wrap(statusCode).should('eq', 404);
        });
    });
});

