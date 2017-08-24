import { TohPage } from './app.po';

describe('toh App', () => {
  let page: TohPage;

  beforeEach(() => {
    page = new TohPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
