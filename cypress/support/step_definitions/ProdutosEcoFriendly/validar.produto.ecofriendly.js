/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../Paginas/authentication.page')
const AuthenticationElements = require('../../Elementos/authentication.elements')

//Esta secão estará validando a página de um produto EcoFriendly e a Usuabilidade dá página!!
//Informações do item, Detalhes, Possibilidade de Compra, Nome do produto e Valor.

Given('Estou navegando na Secao EcoFriendly',() =>{
    AuthenticationPage.AcessarPaginaEcoFriendly()    
})

When('Clico em um produto EcoFriendly', () =>{
    AuthenticationPage.EscolheProduto()
})

Then('A pagina com dados do produto EcoFriendly deve ser apresentada',() =>{
cy.url()
    .should('contain','Redesign')
AuthenticationElements.Produto()
    .should('be.visible')
AuthenticationElements.InfoProduto()
    .should('be.visible')
AuthenticationElements.AddProdutoCarrinho()
    .should('be.visible')
AuthenticationElements.DetalhesProduto()
    .should('be.visible')
AuthenticationElements.ValorProduto()
    .should('be.visible')
})