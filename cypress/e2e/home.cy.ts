describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {    // used to wrap-text of each section easy to identify test cases in multiple testcase

    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })

  })

  context("Course Get started section",()=>{
    it("check the Testing Your First Next.js Application page",()=>{
      cy.getByData('course-0').find("a").contains('Get started').click()
      cy.location("pathname").should("equal","/testing-your-first-application")
    })
    it("check the Testing Foundations page",()=>{
      cy.getByData('course-1').find("a").contains('Get started').click()
      cy.location("pathname").should("equal","/testing-foundations")
    })
    it("check the Cypress Fundamentals page",()=>{
      cy.getByData('course-2').find("a").contains('Get started').click()
      cy.location("pathname").should("equal","/cypress-fundamentals")
    })
  })
})
