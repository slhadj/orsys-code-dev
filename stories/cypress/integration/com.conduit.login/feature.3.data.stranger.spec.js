/// <reference types="Cypress" />
context(__filename, () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Login with Stranger data should be KO ', () => {
        cy.fixture('com.conduit/stranger.json').then(strangerJson => {
            cy.get('input')
            .eq(0)
            .type(strangerJson.email, {delay:10})
            .get('input')
            .eq(1)
            .type(strangerJson.password, {delay:10})
            .get(".btn")
            .click();
            //cy.pause()
            cy.get ('.error-messages li').should('eq', "email or password is invalid")
        })  // load data 


    });
/*     it('if button should exist ', () => {
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

    it.skip('external link opened in same windows ', () => {
        if(cy.$$('a[href^="http"]').length){
            //warn:  open in same windows
           cy.get('a[href^="http"]').should('not.have.attr', 'target', "_blank");

        }
        else{
            cy.log("links not found")
        }

    }); 
 */
});