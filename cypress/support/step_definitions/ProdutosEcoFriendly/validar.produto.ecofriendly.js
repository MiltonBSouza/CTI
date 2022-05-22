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
//Valida se a página aberta é da secão Eco-Friendly verificando se 'Redesign' existe na url.
cy.url()
    .should('contain','Redesign')
//Valida se possui campo com o Nome do Produto.
AuthenticationElements.Produto()
    .should('be.visible')
//Valida se possui campo com informações do Produto.
AuthenticationElements.InfoProduto()
    .should('be.visible')
//Valida se possui campo para adicionar o produto no carro de compras.
AuthenticationElements.AddProdutoCarrinho()
    .should('be.visible')
//Valida se possui campo Detalhes.
AuthenticationElements.DetalhesProduto()
    .should('be.visible')
//Valida se possui campo com Valor do Produto.
AuthenticationElements.ValorProduto()
    .should('be.visible')
})