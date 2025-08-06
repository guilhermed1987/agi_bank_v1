describe('Agi Bank blog search', () => {

    const baseUrl = 'https://blog.agibank.com.br/'
    const endURL = ['beneficios', 'servicos']

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('astra is not defined')
            || err.message.includes('infiniteScroll is not defined')
            || err.message.includes('jetpackCarouselStrings is not defined')
            || err.message.includes('astraNavMenuToggle')
            || err.message.includes('publicPath')
            || err.message.includes('$scope.imagesLoaded')
        ) {
            return false
        }
        return true
    })

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => win.sessionStorage.clear())
        cy.reload(true)
        cy.visit(baseUrl)
        cy.viewport(1920 , 1080)
    })
    endURL.forEach((slug) => {
        it(`Search field and check the results on H1 and checks H2 widget - ${slug}`, () => {
            cy.reload()
            cy.get('a.slide-search.astra-search-icon[role="button"]').click()
            cy.get('#search-field').should('be.visible').clear()
            cy.get('#search-field').type(`${slug}{enter}`)
            cy.get('h1').should('contain.text', slug)
            cy.contains('h2.widget-title', 'Se inscreva em nossa Newsletter')
        })
    })
})
