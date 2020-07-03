describe('App', () => {
    it('visits the app', () => {
        cy.visit('http://localhost:8001')
        cy.get('[class^="input"]').type('spider')
        cy.get('form').submit()
        cy.get('[class^="cards"]').find('[class^="card"]')
    })

})
