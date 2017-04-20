import { XKCDAPPPage } from './app.po';

describe('xkcdapp App', () => {
  let page: XKCDAPPPage;

  beforeEach(() => {
    page = new XKCDAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
