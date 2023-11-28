describe('LOGIN', () => {
  it('LOG1 : Login Sukses (Valid Username and Password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('include.text', 'Dashboard')
  })

  it('LOG2 : Login Gagal (Invalid Password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("wrong-psw")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('include.text', 'Invalid credentials')
  })

  it('LOG3 : Login Gagal (Invalid Username )', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("input[placeholder='Username']").type("wrong-uname")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get("button[type='submit']").click()
      cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('include.text', 'Invalid credentials')
  })

  it('LOG4 : Login Gagal (Blank Form)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']")
    cy.get("input[placeholder='Password']")
    cy.get("button[type='submit']").click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should('include.text', 'Required')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3)").should('include.text', 'Required')
  })

  it('LOG5 : Login Gagal (Blank Username with Valid Password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']")
    cy.get("input[placeholder='Password']").type("admin123")
    cy.get("button[type='submit']").click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)").should('include.text', 'Required')
  })

  it('LOG6 : Login Gagal (Valid Username with Blank Password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']")
    cy.get("button[type='submit']").click()
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3)").should('include.text', 'Required')
  })

  it('LOG6 : Login Gagal (Invalid Username and Password)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type("ronaldo")
    cy.get("input[placeholder='Password']").type("ronaldo7")
    cy.get("button[type='submit']").click()
    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('include.text', 'Invalid credentials')
  })

})