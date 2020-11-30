import playwright from 'playwright'
import {Browser, BrowserContext, Page} from 'playwright'

let browser: Browser
let context: BrowserContext
let page: Page

const webappUrl = `http://${process.env.WEBAPP_HOSTNAME}` 
const greeting =  'Hello kubed'//`Hello ${process.env.GREETING || 'unknown'}!` 


describe('Webapp', () => {

  beforeAll(async () => {
    browser = await playwright.chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();    
  })

  afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
  })
  
  it('should display the correct message', async () => {
    await page.goto(webappUrl);
    
    const preElement = await page.waitForSelector('//body/p')
    
    expect(await preElement.innerText()).toBe(greeting)
    
  })
})
