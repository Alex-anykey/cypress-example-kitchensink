describe('users', () => {
  beforeEach(() => {
    cy.visit('https://google.com/')
  })

  it('login', () => {
    cy.get('input[name="user-name"]')
  })
})
