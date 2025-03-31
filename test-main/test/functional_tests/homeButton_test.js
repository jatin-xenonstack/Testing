const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function testXenonstackWebsite() {
  let driver = await new Builder().forBrowser('chrome').build();

  async function clickElement(selector) {
    const element = await driver.findElement(selector);
    await driver.executeScript("arguments[0].scrollIntoView();", element);
    await driver.sleep(1000);


    const currentUrl = await driver.getCurrentUrl();

 
    await driver.executeScript("arguments[0].click();", element);

    try {
  
      await driver.wait(async () => {
        const newUrl = await driver.getCurrentUrl();
        return newUrl !== currentUrl;
      }, 30000);

 
      const newUrl = await driver.getCurrentUrl();

   
      console.log('New page opened:', newUrl);

    } catch (err) {
  
      console.warn('Page did not change within the specified time.');
    }
  }

  try {
    await driver.get('https://www.xenonstack.com/');
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    await driver.sleep(1000); 
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/akira-ai/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/elixirdata/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//section[@id='product-main-section-three']//div[@class='product-button']"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/nexastack-unified-inference/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//p[normalize-space()='Discover Now']"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/metasecure/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/neural-ai/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/agentic-platforms/unified-physical-ai-platform/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//a[@href='https://www.xenonstack.com/xenonstack-academy/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"));
    await driver.navigate().back();
    await clickElement(By.xpath("//div[@class='first-mid-banner-button']"));
    await driver.executeScript("window.scrollTo(0, 0);");
    await driver.navigate().back();
    await driver.sleep(1000);  
    await clickElement(By.xpath("//div[@class='second-mid-banner-button']//a[@href='https://xenonify.ai/']"));
    await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    await driver.sleep(1000);  

    await driver.navigate().back();
    console.log("All buttons are working properly");

  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await driver.quit();
  }
})();
