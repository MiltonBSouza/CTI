/// <reference types="cypress" />
/* global Then, When, Given */

//Esta secão estará validando Critérios que DEVEM existir da página EcoFriendly.
When('Quero usar filtros',() =>{
//Valida se possui filtro de Subcategoria(Subcategory) e Preços(Sort by)
    cy.xpath('//*[@id="filled-in-$cf.name-1"]/option[1]')
            .invoke('text')
                .should('equal','Subcategory')
    cy.xpath('//*[@id="sortby"]/option[1]')
        .invoke('text')
            .should('equal',' Sort By ')
})

Then('A secao deve ter somente filtro Subcategory e Sort by',() =>{
//Por Critério a secão de Filtro só deve possuir 2 tipos. Aqui é feito a validação da área. 
cy.xpath('//*[@id="category"]/main/div/div/div[1]/div[1]/div[1]/div')
    .find('form').should(($forms) => {
        expect($forms).to.have.length(2)
      })
})