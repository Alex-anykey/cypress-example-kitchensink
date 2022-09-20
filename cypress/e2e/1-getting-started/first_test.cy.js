describe('users', () => {
  beforeEach(() => {
    cy.visit('http://saucedemo.com/')
  })

  it('login', () => {
    cy.get('input[name="user-name"]')
  })
})
