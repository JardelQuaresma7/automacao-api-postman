/// <reference types="cypress"/>

describe('Cadastrar dispositivos', () => {

  it('Cadastrar dispositivo com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.restful-api.dev/objects',
      body: {
        
          "name": "Apple MacBook Pro 16",
          "data": {
             "year": 2019,
             "price": 1849.99,
             "CPU model": "Intel Core i9",
             "Hard disk size": "1 TB"
          }
       
      }
    })

    .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal('Apple MacBook Pro 16')
    })
  
  })

})