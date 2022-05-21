/// <reference types="cypress" />

const { equal } = require("minimalistic-assert")


/* global Then, When, Given */

When('Quero usar filtros',() =>{
    cy.xpath('//*[@id="filled-in-$cf.name-1"]/option[1]')
            .invoke('text')
                .should('equal','Subcategory')
    cy.xpath('//*[@id="sortby"]/option[1]')
        .invoke('text')
            .should('equal',' Sort By ')
})

Then('A secao deve ter somente filtro Subcategory e Sort by',() =>{

cy.xpath('//*[@id="category"]/main/div/div/div[1]/div[1]/div[1]/div')
    .find('form').should(($forms) => {
        expect($forms).to.have.length(2)
      })
})