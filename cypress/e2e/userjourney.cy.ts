describe("user journey",()=>{
    beforeEach("home page",()=>{
        cy.visit("http://localhost:3000/")
    })
    it("Go to test your Next Application course",()=>{
        cy.getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname").should("eq","/testing-your-first-application")
        cy.getByData("next-lesson-button").click()  
        cy.location("pathname").should("eq","/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").check();
        cy.getByData("next-lesson-button").find("a").contains("Next Lesson").click()
        cy.location("pathname").should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.getByData("challenge-answer-0").check();
        cy.getByData("next-lesson-button").find("a").contains("Next Lesson").click()
        cy.location("pathname").should("eq","/testing-your-first-application/setting-up-data-before-each-test")
        cy.getByData("challenge-answer-0").check();
        cy.getByData("next-lesson-button").find("a").contains("Complete Course").click()
        cy.location("pathname").should("eq","/")
        
    })
})