describe('Auth', () => {
  beforeEach(() => {
  const email = 'admin@yopmail.com'
  const pwd = 'password123'
  cy.LoginWithPageSession(email, pwd)
  })
  it('FAQ1', () => {
      cy.xpath("//span[normalize-space()='Taspen Care']").click()
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > aside:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(1)").click()
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > li:nth-child(3) > span:nth-child(1)")
      .should('include.text', 'Pertanyaan Umum')
  })
  it('FAQ2', () => {
      cy.xpath("//span[normalize-space()='Taspen Care']").click()
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > aside:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > ul:nth-child(2) > li:nth-child(3) > span:nth-child(1)").click()
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > ol:nth-child(1) > li:nth-child(3) > span:nth-child(1)")
      .should('include.text', 'Pertanyaan Umum')
      cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > span:nth-child(1)").click()
      cy.get("div[class='css-wnhrih'] h1[class='ant-typography css-1e5wuiv']")
      .should('include.text', 'Detail Pertanyaan Umum')
      })
 
  })