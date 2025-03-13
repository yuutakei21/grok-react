describe('Login Page E2E Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost/login');
  });

  it('should login successfully with correct credentials', () => {
    cy.get('input[name="email"]').type('eve.holt@reqres.in');
    cy.get('input[name="password"]').type('anything');
    cy.get('button[type="submit"]').click();
    cy.contains('Đăng nhập thành công!').should('be.visible');
    cy.get('input[name="email"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
  });

  it('should show error with incorrect credentials', () => {
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.contains('Đăng nhập thất bại!').should('be.visible');
    cy.get('input[name="email"]').should('have.value', 'wrong@example.com');
    cy.get('input[name="password"]').should('have.value', 'wrongpass');
  });
});