import { TravistestPage } from './app.po';

describe('travistest App', () => {
  let page: TravistestPage;

  beforeEach(() => {
    page = new TravistestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works fine xeah!');
  });
});
