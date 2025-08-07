describe('Dog API Test Suite', () => {

    const baseUrl = 'https://dog.ceo/api';

    it('GET /breeds/list/all - should return list of all dog breeds', () => {
        cy.request(`${baseUrl}/breeds/list/all`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.be.an('object')
            expect(Object.keys(response.body.message).length).to.be.greaterThan(0)
        });
    });

    it('GET /breed/{breed}/images - should return images for selected breed', () => {
        const breed = 'hound'
        cy.request(`${baseUrl}/breed/${breed}/images`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.be.an('array')
            expect(response.body.message[0]).to.include('https://images.dog.ceo/breeds/')
        })
    })

    it('GET /breeds/image/random - should return a random dog image', () => {
        cy.request(`${baseUrl}/breeds/image/random`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.be.a('string')
            expect(response.body.message).to.match(/^https:\/\/images.dog.ceo\/breeds\//)
        })
    })
})