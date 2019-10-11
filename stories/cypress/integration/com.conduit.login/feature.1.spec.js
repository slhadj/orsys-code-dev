/// <reference types="Cypress" />

context('com.conduit.login: feature 1', () => {
    beforeEach(() => {
        cy.visit('/')
    });

     it('Connection to website is ok ', () => {
        cy.get("title").should('contain', 'Conduit');
        cy.get('nav a.nav-link')
        .eq(1)
        .click();
        cy.get("h1").should('contain', 'Sign In');

    });
 /*   it('if button should exist ', () => {
        cy.get('nav a.navbar-brand[href="/"]')
        .should('exist'); 
        
    });    
    it('glogal navigation home  ', () => {
        cy.get('nav a.nav-link')
        .eq(0)
        .should('exist')
        .should('have.attr', 'href', "/")
        .should('contain', 'Home');
    });  
    
    it('glogal navigation sign in  ', () => {
        cy.get('nav a.nav-link')
        .eq(1)
        .should('exist')
        .should('have.attr', 'href', "/login")
        .should('contain', 'Sign in');
    });  
    it('glogal navigation sign up  ', () => {
        cy.get('nav a.nav-link')
        .eq(2)
        .should('exist')
        .should('have.attr', 'href', "/register")
        .should('contain', 'Sign up');
    });  

    it('glogal selection home   ', () => {
        cy.get('nav a.nav-link.active').should('not.exist')
       
    });  

    it('glogal navigation to sign in  ', () => {
        cy.get('nav a.nav-link')
        .eq(1)
        .should('exist')
        .should('have.attr', 'href', "/login")
        .should('contain', 'Sign in');
    }); 

    it('external link opened in same windows ', () => {
        if(cy.$$('a[href^="http"]').length){
            //warn:  open in same windows
           cy.get('a[href^="http"]').should('not.have.attr', 'target', "_blank");
        }
        

    });  */

});