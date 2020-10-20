describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=slidercomponent--primary'));

  it('should render the component', () => {
    cy.get('mono-slider').should('exist');
  });
});
