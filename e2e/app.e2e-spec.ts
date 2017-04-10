import { TsEdiesysProjectPage } from './app.po';

describe('ts-ediesys-project App', function() {
  let page: TsEdiesysProjectPage;

  beforeEach(() => {
    page = new TsEdiesysProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
