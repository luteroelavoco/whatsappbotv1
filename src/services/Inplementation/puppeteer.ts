import puppeteer from "puppeteer";

const chromeOptions = {
  headless: !false,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
};

export class Puppeteer {
  public browser: any;
  public page: any;
  public url: string | Boolean;
  public navigator: Function;
  constructor(url: string | null, navigator: Function | null) {
    this.url = url;
    this.navigator = navigator;
  }

  async openBrowser() {
    this.browser = await puppeteer.launch(chromeOptions);
    this.page = await this.browser.newPage();
    await this.page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36"
    );
    return await this.page.goto(this.url, {
      waitUntil: "domcontentloaded",
    });
  }

  private async closeBrowser() {
    return await this.browser.close();
  }

  async extractData() {
    await this.openBrowser();
    let navigationResult = await this.navigator(this.page);
    await this.closeBrowser();
    return navigationResult;
  }
}
