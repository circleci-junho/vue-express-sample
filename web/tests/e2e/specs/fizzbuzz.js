// https://docs.cypress.io/api/table-of-contents

describe('FizzBuzz Test', () => {
  it('should display 0', () => {
    cy.visit('/fizzbuzz')
    cy.get('.fizzBuzz__text').contains(0)
  })

  it('should increse number each time click the boutton', () => {
    cy.visit('/fizzbuzz')

    for(let n = 1; n <= 30; n ++){
      cy.get('.fizzBuzz__button').click()
      cy.get('.fizzBuzz__text').contains(n)
    }
  })

  it('should coutain Fizz when click the boutton Multiple of 3', () => {
    cy.visit('/fizzbuzz')

    for(let n = 1; n <= 30; n ++){
      cy.get('.fizzBuzz__button').click()
      
      if (n % 3 != 0) continue;
      cy.get('.fizzBuzz__text').contains("Fizz")
    }
  })

  it('should coutain Buzz when click the boutton Multiple of 5', () => {
    cy.visit('/fizzbuzz')

    for(let n = 1; n <= 30; n ++){
      cy.get('.fizzBuzz__button').click()
      
      if (n % 5 != 0) continue;
      cy.get('.fizzBuzz__text').contains("Buzz")
    }
  })

  it('should coutain FizzBuzz when click the boutton Multiple of 15', () => {
    cy.visit('/fizzbuzz')

    for(let n = 1; n <= 30; n ++){
      cy.get('.fizzBuzz__button').click()
      
      if (n % 15 != 0) continue;
      cy.get('.fizzBuzz__text').contains("FizzBuzz")
    }
  })
})
