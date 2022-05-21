/// <reference types="cypress" />
/* global Then, When, Given */

const AuthenticationPage = require('../../Paginas/authentication.page')
//Entra na página inicial de googlemerchandisestore.
Given('Estou navegando na loja', () => {
    cy.visit('')
})

//Busca e entra na seção EcoFriendly.
When('Clico na secao EcoFriendly dentro do menu', () =>{
    AuthenticationPage.AcessarPaginaEcoFriendly()     
})

//Valida se está na página Eco-Friendly.
Then('A pagina EcoFriendly deve ser apresentada',() =>{
    AuthenticationPage.verificaPagina()
})
