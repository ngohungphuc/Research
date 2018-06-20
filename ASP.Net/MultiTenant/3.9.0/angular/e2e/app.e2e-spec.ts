import { MultiTenantTemplatePage } from './app.po';

describe('MultiTenant App', function() {
  let page: MultiTenantTemplatePage;

  beforeEach(() => {
    page = new MultiTenantTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
