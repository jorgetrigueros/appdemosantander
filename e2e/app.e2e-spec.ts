import { BancoSantanderPage } from './app.po';

describe('banco-santander App', () => {
  let page: BancoSantanderPage;

  beforeEach(() => {
    page = new BancoSantanderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
