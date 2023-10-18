it('loads home page', ()=>{
    const page = cy.visit('/en')

    page.get('title').should('have.text','Benefits Newsfeed')
})