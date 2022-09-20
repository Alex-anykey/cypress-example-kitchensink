describe('users', () => {
  beforeEach(() => {
    cy.visit('http://users.bugred.ru/')
  })

  it('login', () => {
    cy.get('input[name="user-name"]')
  })
})
