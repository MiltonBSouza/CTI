/// <reference types="cypress" />

export default class AuthenticationElements {
//Puxa o Menu do site.
    static menu() {
        return cy.get('.navbar-row-1 > .container-navbar-menu-button > .navbar-brand > .material-icons')
    }
//Puxa a aba 'Collections' no Menu.
    static OpenCollections() {
        return cy.get(':nth-child(5) > .collapsible-header')
    }
//Puxa a opção 'EcoFriendly' dentro da aba 'Collections'.
    static EcoFriendlyMenu() {
        return cy.get('#slide-out > ul.collapsible.collapsible-accordion.visible-xs.visible-sm.visible-md > li.active > div > ul > li:nth-child(4)')
    }
//Puxa a opção imagem/link com a Logo do site centralizada na área superior.
    static ImagemLinkGoogle() {
        return cy.get('a > img')
    }
//Puxa a opção/imagem Lupa de Pesquisa na área superior direita.
    static FuncaoPesquisa() {
        return cy.get('strong > a > .material-icons')
    }
//Puxa a opção/imagem Carro de Compras na área superior direita.
    static CarroDeCompras() {
        return cy.get('.right-container > .navbar-form > [href="basket.html?vid=20160512512"] > .material-icons')
    }
//Puxa um produto na página EcoFriendly.
    static EscolheProduto() {
        return cy.get('#js-item-cimage-9206775')

    }
//Puxa o campo com Nome do Produto dentro da página do Produto.
    static Produto() {
        return cy.get('.margin-0')
    }
//Puxa a área com informações do Produto.
    static InfoProduto() {
        return cy.get('#page > main > div > div > div.row-1.row > div.col-xs-12.col-sm-5 > div.row.hidden-xs > div > p')
    }
//Puxa a área com Detalhes do Produto.
    static DetalhesProduto() {
        return cy.get('#details')
    }
//Puxa a área com Opção de Adicionar o Produto ao carro de compras.
    static AddProdutoCarrinho() {
        return cy.get('.add-to > .clearfix')
    }
//Puxa a área com informação do Valor do Produto.
    static ValorProduto() {
        return cy.get('.item-pricing-dark > :nth-child(1)')
    }
}

