import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

const DEFAULT_VILLAIN_MESSAGE = 'Well, well, we meet again Mr. Bond, James. Well played sir.';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a dire an evil welcome message mwahahahaha!!!', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual(DEFAULT_VILLAIN_MESSAGE);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
