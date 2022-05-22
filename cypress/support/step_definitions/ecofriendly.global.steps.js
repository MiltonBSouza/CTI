/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../Paginas/authentication.page')

//Valida Itens de Usuabilidade que NÃO podem desaparecer da página.
Given('Estou navegando na secao EcoFriendly', () => {
  AuthenticationPage.verificaPagina()

})