import { ShoppingWebPage } from './app.po';

describe('shopping-web App', () => {
  let page: ShoppingWebPage;

  beforeEach(() => {
    page = new ShoppingWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
