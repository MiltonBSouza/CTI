/// <reference types="cypress" />

const AuthenticationElements = require('../Elementos/authentication.elements')

export default class AuthenticationPage{
//Valida se está na página Eco-Friendly.
    static verificaPagina(){
        cy.get('.catTitle')
            .invoke('text')
                .should('equal','Eco-Friendly')
    }
//Leva direto a página Eco-Friendly de onde estiver.
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
//Valida se a função InfinitScrool está funcionando.
    static ValidaInfinitScrool() {
    cy.window().scrollTo('bottom')
        .get('.fa').should('be.visible')
            .get('.fa').should('not.be.visible')
    }
//Escolhe e clica em um Produto na Página parametrizado(Authentication.Elements.js).
    static EscolheProduto() {
    AuthenticationElements.EscolheProduto().click()
    }

}
