/// <reference types="cypress"/>

describe('Buscar dispositivos', () => {

  it('Buscar dispositivos', () => {
      cy.request({
        method: 'GET',
        url: 'https://api.restful-api.dev/objects'
      })
      .then((response) => {

      })

  })

  it('Buscar dispositivo especifico', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.restful-api.dev/objects/1'
    })

    .then((response) => {
        expect(response.status).to.equal(200)
    })
  
  })

  it('Buscar dispositivo inesistente', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.restful-api.dev/objects/272727272',
      failOnStatusCode: false
    })
    .then((response) => {
      expect(response.status).to.equal(404)
      expect(response.body.error).to.equal('Oject with id=272727272 was not found.')
    })

  })
  
})