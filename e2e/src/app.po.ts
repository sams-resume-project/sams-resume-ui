import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    /**
     * thanks SO: https://stackoverflow.com/questions/28464604/more-than-one-element-found-for-locator-warning
     */
    return element.all(by.css('app-root .container-inner p')).first().getText() as Promise<string>;
  }
}
