import { TravistestappPage } from './app.po';

describe('travistestapp App', () => {
  let page: TravistestappPage;

  beforeEach(() => {
    page = new TravistestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
