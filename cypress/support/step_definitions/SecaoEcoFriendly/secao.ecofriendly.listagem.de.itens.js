/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../Paginas/authentication.page')

//Esta secão estará validando Críterios que DEVEM existir na página EcoFriendly.
When('Estou vendo a lista de produtos EcoFriendly',() =>{
    cy.get('.listing')
        .should('be.visible')
})

//Esta secão estará validando a funcao rolagem infinita
Then('A secao deve ter funcao rolagem infinita',() =>{

AuthenticationPage.ValidaInfinitScrool()
AuthenticationPage.ValidaInfinitScrool()
AuthenticationPage.ValidaInfinitScrool()

cy.window().scrollTo('bottom')
    .get('.fa').should('not.be.visible')
})