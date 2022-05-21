/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../Paginas/authentication.page')

Given('Estou navegando na secao EcoFriendly', () => {
  AuthenticationPage.verificaPagina()

})