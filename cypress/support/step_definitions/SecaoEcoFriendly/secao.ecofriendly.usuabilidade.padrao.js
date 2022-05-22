/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationElements = require('../../Elementos/authentication.elements')
const AuthenticationPage = require('../../Paginas/authentication.page')

//Valida se está na página Eco-Friendly.
When('Com a pagina aberta',() =>{
    AuthenticationPage.verificaPagina()
})
//Valida Itens de Usuabilidade que NÃO podem desaparecer da página.
Then('A pagina deve ter usuabilidade padrao',() =>{

AuthenticationElements.menu()
    .should('be.visible')
AuthenticationElements.ImagemLinkGoogle()
    .should('be.visible')
AuthenticationElements.FuncaoPesquisa()
    .should('be.visible')
AuthenticationElements.CarroDeCompras()
    .should('be.visible')
cy.get('.listing').should('be.visible')
//Falta Validar CSS
})