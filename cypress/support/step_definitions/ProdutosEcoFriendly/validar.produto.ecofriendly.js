/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../Paginas/authentication.page')
const AuthenticationElements = require('../../Elementos/authentication.elements')

Given('Estou navegando na Secao EcoFriendly',() =>{
    AuthenticationPage.AcessarPaginaEcoFriendly()    
})

When('Clico em um produto EcoFriendly', () =>{
cy.get('#js-item-cimage-9207035').click()
})

Then('A pagina com dados do produto EcoFriendly deve ser apresentada',() =>{
AuthenticationElements.InfoProduto()
    .should('contain.text','recycled ')
AuthenticationElements.AddProdutoCarrinho()
    .should('be.visible')
AuthenticationElements.DetalhesProduto()
    .should('be.visible')
AuthenticationElements.Produto()
    .should('be.visible')
AuthenticationElements.ValorProduto()
    .should('be.visible')

})