// cypress/e2e/finances.cy.js

function criarTransacao(descricao, valor) {
  cy.contains('Nova Transação').click();
  cy.get('#description').type(descricao);
  cy.get('#amount').type(String(valor));
  cy.get('#date').type('2025-02-15'); // ajuste se quiser data dinâmica
  cy.contains('button', 'Salvar').click();
}

describe('Transações', () => {
  beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/');
  });

  it('Cadastrar uma entrada', () => {
    criarTransacao('Freela', 100);
    cy.get('tbody tr').last().find('td.description').should('have.text', 'Freela');
  });

  it('Excluir transação', () => {
     criarTransacao('Freela', 100);
     criarTransacao('Mesada', 10);
    // aqui o código para selecionar e excluir a transação criada
   cy.contains(".description","Freela")
   .parent()
   .find('img')
   .click()
    cy.get('tbody tr').should("have.length",1)
  });
});
