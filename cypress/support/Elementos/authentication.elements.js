/// <reference types="cypress" />

export default class AuthenticationElements {

    static menu() {
        return cy.get('.navbar-row-1 > .container-navbar-menu-button > .navbar-brand > .material-icons')
    }
    static OpenCollections() {
        return cy.get(':nth-child(5) > .collapsible-header')
    }
    static EcoFriendlyMenu() {
        return cy.get('#slide-out > ul.collapsible.collapsible-accordion.visible-xs.visible-sm.visible-md > li.active > div > ul > li:nth-child(4)')
    }
    static ImagemLinkGoogle() {
        return cy.get('a > img')
    }
    static FuncaoPesquisa() {
        return cy.get('strong > a > .material-icons')
    }
    static CarroDeCompras() {
        return cy.get('.right-container > .navbar-form > [href="basket.html?vid=20160512512"] > .material-icons')
    }
    static Produto() {
        return cy.get('.margin-0')
    }
    static InfoProduto() {
        return cy.get('#page > main > div > div > div.row-1.row > div.col-xs-12.col-sm-5 > div.row.hidden-xs > div > p')
    }
    static DetalhesProduto() {
        return cy.get('#details')
    }
    static AddProdutoCarrinho() {
        return cy.get('#js-item-addtocartbtn-9207035')
    }
    static ValorProduto() {
        return cy.get('.item-pricing-dark > :nth-child(1)')
    }
}

