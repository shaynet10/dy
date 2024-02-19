import * as loginPageSelectors from '../signInPage/selectors';

const baseUrl = 'https://cocktailale.web.app/getStarted';


const isVisible = (selector) => Cypress.$(`${selector}:visible`).length > 0;

export const waitForLoginPageToLoad = () => {
    cy.waitUntil(() => isVisible(loginPageSelectors.signInButton), {
        verbose: true,
        customCheckMessage: 'is main page loaded',
        timeout: 10000,
        interval: 1000,
    });
    // cy.get(mainPageSelectors.articleImage({ timeout: 10000 }).should('be.visible');
}

export const openLoginPage = () => {
    cy.visit(baseUrl);
    cy.waitForNetworkIdle(2000);
    waitForLoginPageToLoad();
};
