/// <reference types="cypress" />

const AuthenticationElements = require('../Elementos/authentication.elements')

export default class AuthenticationPage{
    //Valida se está na página Eco-Friendly.
    static verificaPagina(){
        cy.get('.catTitle')
            .invoke('text')
                .should('equal','Eco-Friendly')
    }
    //Leva direto a página de onde estiver.
    static AcessarPaginaEcoFriendly() {
    cy.visit('').then(()=>{
    AuthenticationElements.menu()
        .click()
    AuthenticationElements.OpenCollections()
        .click()
    AuthenticationElements.EcoFriendlyMenu()
        .click()
        
        })
    }
    static ValidaInfinitScrool() {
    cy.window().scrollTo('bottom')
        .get('.fa').should('be.visible')
            .get('.fa').should('not.be.visible')
    }
}
