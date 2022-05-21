Feature: Validar Pagina EcoFriendly 

    Eu como usuario da googlemerchandisestore
    Desejo acesso a seção de produtos EcoFriendly 
    Para pode comprar produtos que respeitem a natureza

    Scenario: Validar Secao EcoFriendly
    Given Estou navegando na loja
    When  Clico na secao EcoFriendly dentro do menu
    Then  A pagina EcoFriendly deve ser apresentada
    
    Scenario: Secao EcoFriendly usabilidade padrao
    Given Estou navegando na secao EcoFriendly
    When  Com a pagina aberta
    Then  A pagina deve ter usuabilidade padrao

    Scenario: Secao EcoFriendly filtros
    Given Estou navegando na secao EcoFriendly
    When  Quero usar filtros
    Then  A secao deve ter somente filtro Subcategory e Sort by

    Scenario: Secao EcoFriendly listagem de itens
    Given Estou navegando na secao EcoFriendly
    When  Estou vendo a lista de produtos EcoFriendly
    Then  A secao deve ter funcao rolagem infinita

    Scenario: Validar produto EcoFriendly
    Given Estou navegando na Secao EcoFriendly
    When  Clico em um produto EcoFriendly
    Then  A pagina com dados do produto EcoFriendly deve ser apresentada
