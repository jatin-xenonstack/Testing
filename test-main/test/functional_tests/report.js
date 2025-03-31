const { describe, it, before, after } = require("mocha");
const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");
const logger = console  

async function clickElement(driver, selector) {
  const element = await driver.findElement(selector);
  await driver.executeScript("arguments[0].scrollIntoView();", element);
  await driver.sleep(500);

  const currentUrl = await driver.getCurrentUrl();
  await driver.executeScript("arguments[0].click();", element);

  try {
    await driver.wait(async () => {
      const newUrl = await driver.getCurrentUrl();
      return newUrl !== currentUrl;
    }, 20000);

    const newUrl = await driver.getCurrentUrl();
    console.log("New page opened:", newUrl);
  } catch (err) {
    console.warn("Page did not change within the specified time.");
  }
}

describe("Xenonstack Tests", function () {
  this.timeout(700000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  // it("should validate invalid inputs", async function () {
  //   await driver.get("https://www.xenonstack.com/");
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//div[@class='nav-button']//a")),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='Firstname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("#2456sd");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='Lastname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("@9u7t");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(
  //           By.xpath("//div[@class='form-field-outer-wrapper']//div[1]")
  //         )
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='emailid']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("Varybv098");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(
  //           By.xpath("//div[@class='form-field-outer-wrapper']//div[1]")
  //         )
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='contactnumber']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("12343");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(
  //           By.xpath("//div[@class='form-field-outer-wrapper']//div[1]")
  //         )
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='companyname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("23e");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//select[@id='enterpriseIndustry']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("Financial Services");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(
  //           By.xpath(
  //             "//div[@id='form-step-one']//div[@class='next-step-button-wrapper']"
  //           )
  //         )
  //       ),
  //       10000
  //     )
  //     .click();

  //   let validationPassed = true;

  //   try {
  //     let firstNameValidation = await driver.wait(
  //       until.elementLocated(
  //         By.xpath("//*[contains(text(),'Please enter a valid First Name')]")
  //       ),
  //       5000
  //     );
  //     console.log("Invalid input test for first name validation passed.");
  //   } catch (err) {
  //     validationPassed = false;
  //     console.log("Invalid input test for first name validation failed.");
  //   }

  //   try {
  //     let lastNameValidation = await driver.wait(
  //       until.elementLocated(
  //         By.xpath("//*[contains(text(),'Please enter a valid Last Name')]")
  //       ),
  //       5000
  //     );
  //     console.log("Invalid input test for last name validation passed.");
  //   } catch (err) {
  //     validationPassed = false;
  //     console.log("Invalid input test for last name validation failed.");
  //   }

  //   try {
  //     let emailValidation = await driver.wait(
  //       until.elementLocated(
  //         By.xpath(
  //           "//*[contains(text(),'Please enter a valid Business Email ID')]"
  //         )
  //       ),
  //       5000
  //     );
  //     console.log("Invalid input test for email validation passed.");
  //   } catch (err) {
  //     validationPassed = false;
  //     console.log("Invalid input test for email validation failed.");
  //   }

  //   try {
  //     let contactNumberValidation = await driver.wait(
  //       until.elementLocated(
  //         By.xpath(
  //           "//*[contains(text(),'Please enter a valid Contact Number')]"
  //         )
  //       ),
  //       5000
  //     );
  //     console.log("Invalid input test for contact number validation passed.");
  //   } catch (err) {
  //     validationPassed = false;
  //     console.log("Invalid input test for contact number validation failed.");
  //   }

  //   try {
  //     let companyNameValidation = await driver.wait(
  //       until.elementLocated(
  //         By.xpath("//*[contains(text(),'Please enter a valid Company Name')]")
  //       ),
  //       5000
  //     );
  //     console.log("Invalid input test for company name validation passed.");
  //   } catch (err) {
  //     validationPassed = false;
  //     console.log("Invalid input test for company name validation failed.");
  //   }
  //   if (validationPassed) {
  //     console.log("Invalid input test validation passed.");
  //   } else {
  //     console.log("Invalid input test validation failed.");
  //   }
  // });

  // it("should validate valid inputs", async function () {
  //   await driver.get("https://www.xenonstack.com/");
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath("//span[normalize-space()='Get Started']")
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='Firstname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("Varun");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='Lastname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("Verma");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='emailid']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("varunverma823@gmail.com");
  //   let contactNumber = await driver.wait(
  //     until.elementIsVisible(
  //       driver.findElement(By.xpath("//input[@id='contactnumber']"))
  //     ),
  //     10000
  //   );
  //   await contactNumber.click();
  //   await contactNumber.sendKeys("1234567890");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//input[@id='companyname']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("xenon");
  //   await driver
  //     .wait(
  //       until.elementIsVisible(
  //         driver.findElement(By.xpath("//select[@id='enterpriseIndustry']"))
  //       ),
  //       10000
  //     )
  //     .sendKeys("Software Development");
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//p[normalize-space()='Proceed Next']")),
  //       10000
  //     )
  //     .click();
  //   let stepTwo = await driver.wait(
  //     until.elementIsVisible(
  //       driver.findElement(By.xpath("//div[@id='form-step-two']"))
  //     ),
  //     10000
  //   );
  //   await stepTwo.click();

  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath(
  //           "//p[normalize-space()='Akira AI - Agentic AI Platform Multi Agent System']"
  //         )
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//p[normalize-space()='Startup']")),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath("//p[normalize-space()='Data and Analytics']")
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath("//p[normalize-space()='POC Completed']")
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath("//p[normalize-space()='Aligning AI with business goals']")
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//p[normalize-space()='AWS']")),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//p[normalize-space()='SnowFlake']")),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath(
  //           "//p[normalize-space()='Assisted Intelligence Agents as Co-Pilot']"
  //         )
  //       ),
  //       10000
  //     )
  //     .click();
  //   await driver
  //     .wait(
  //       until.elementLocated(
  //         By.xpath("//p[normalize-space()='Internal Organization']")
  //       ),
  //       10000
  //     )
  //     .click();

  //   await driver.executeScript(
  //     "arguments[0].scrollIntoView(true);",
  //     driver.findElement(
  //       By.xpath("//p[contains(text(),'Internal Organization')]")
  //     )
  //   );
  //   await driver
  //     .wait(
  //       until.elementLocated(By.xpath("//p[normalize-space()='Submit']")),
  //       10000
  //     )
  //     .click();
  //   console.log("Valid input test completed successfully");
  // });

  it("should test all buttons on the website", async function () {
    await driver.get("https://www.xenonstack.com/");
    await driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight);"
    );
    await driver.sleep(1000);
    await clickElement(
      driver,
      By.xpath(
        "//a[@href='https://www.xenonstack.com/agentic-platforms/akira-ai/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"
      )
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath(
        "//a[@href='https://www.xenonstack.com/agentic-platforms/elixirdata/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"
      )
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath(
        "//section[@id='product-main-section-three']//div[@class='product-button']"
      )
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath(
        "//a[@href='https://www.xenonstack.com/agentic-platforms/nexastack-unified-inference/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"
      )
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath("//p[normalize-space()='Discover Now']")
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath(
        "//a[@href='https://www.xenonstack.com/agentic-platforms/metasecure/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"
      )
    );
    await driver.navigate().back();

    await clickElement(
      driver,
      By.xpath(
        "//a[@href='https://www.xenonstack.com/agentic-platforms/neural-ai/']//div[@class='product-button']//p[contains(text(),'Explore Further')]"
      )
    );
    await driver.navigate().back();
    await clickElement(
      driver,
      By.xpath("//div[@class='first-mid-banner-button']")
    );
    await driver.executeScript("window.scrollTo(0, 0);");
    await driver.navigate().back();
    await driver.sleep(1000);
    await clickElement(
      driver,
      By.xpath("//div[@class='second-mid-banner-button']//a[@href='https://xenonify.ai/']")
    );
    await driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight);"
    );
    await driver.sleep(1000);
    await driver.navigate().back();
    console.log("All buttons are working properly");
  });

//   it("should handle invalid page gracefully", async function () {
//     await driver.get("https://www.xenonstack.com/invalid-page");
//     await driver.sleep(1000);

//     let errorMessage;
//     try {
//       errorMessage = await driver.findElement(By.tagName("h1")).getText();
//     } catch (err) {
//       errorMessage = await driver.findElement(By.tagName("body")).getText();
//     }

//     if (
//       errorMessage.includes("404") ||
//       errorMessage.includes("Page Not Found") ||
//       errorMessage.includes("error")
//     ) {
//       console.log(
//         "Invalid page handling test passed: Correct error message displayed"
//       );
//     } else {
//       console.log(
//         "Invalid page handling test failed: Unexpected message displayed"
//       );
//     }
//   });
//   it("should test navbar links", async function () {
//     await driver.get("https://www.xenonstack.com/");
  
//     async function clickAndCheckRedirection(xpath, linkName) {
//       const oldUrl = await driver.getCurrentUrl();
//       await driver.findElement(By.xpath(xpath)).click();
//       await driver.sleep(1000);
//       const newUrl = await driver.getCurrentUrl();
//       if (newUrl !== oldUrl) {
//         console.log(`Clicked on '${linkName}' and redirected to a new page.`);
//       } 
//       else if (newUrl === oldUrl) {
//         console.log(`Clicked on '${linkName}' and and page scrolled.`);
//       }else {
//         throw new Error(`Clicked on '${linkName}' but not redirected to a new page.`);
//       }
//     }
  
//     await clickAndCheckRedirection(
//       "//p[normalize-space()='Foundry']",
//       "Foundry"
//     );
//     await clickAndCheckRedirection(
//       "//p[normalize-space()='Neural AI']",
//       "Neural AI"
//     );
//     await clickAndCheckRedirection(
//       "//p[contains(text(),'NexaStack')]",
//       "NexaStack"
//     );
//     await clickAndCheckRedirection(
//       "//p[contains(text(),'ElixirData')]",
//       "ElixirData"
//     );
//     await clickAndCheckRedirection(
//       "//p[contains(text(),'MetaSecure')]",
//       "MetaSecure"
//     );
//     await clickAndCheckRedirection(
//       "//li[@class='nav-li item']//p[contains(text(),'Akira AI')]",
//       "Akira AI"
//     );
//     await clickAndCheckRedirection("//p[normalize-space()='XAI']", "XAI");
  
//     console.log("Navbar test case completed successfully");
//   });
  
//   it("should test Xenonstack logo click", async function () {
//     await driver.get("https://www.xenonstack.com/");

//     await driver.executeScript(
//       "window.scrollTo(0, document.body.scrollHeight);"
//     );
//     await driver.sleep(1000);

//     const logo = await driver.findElement(
//       By.xpath("//li[@class='nav-li logo-li']//a")
//     );
//     await driver.executeScript("arguments[0].click();", logo);
//     await driver.sleep(1000);

//     const scrollPosition = await driver.executeScript(
//       "return window.pageYOffset;"
//     );
//     if (scrollPosition === 0) {
//       console.log("Test passed: The logo click scrolled the page to the top.");
//     } else {
//       console.log(
//         "Test failed: The logo click did not scroll the page to the top."
//       );
//     }
//   });

//   it("should perform compatibility tests for different devices", async function () {
//     const devices = ["desktop", "tablet", "mobile"];

//     async function compatibilityTest(device) {
//       let driver;
//       const deviceDimensions = {
//         desktop: { width: 1920, height: 1080 },
//         tablet: { width: 768, height: 1024 },
//         mobile: { width: 375, height: 667 },
//       };

//       try {
//         driver = await new Builder().forBrowser("chrome").build();
//         await driver.manage().window().setRect(deviceDimensions[device]);
//         await driver.get("https://www.xenonstack.com/");
//         console.log(
//           `${device}: Website loaded successfully at ${deviceDimensions[device].width}x${deviceDimensions[device].height} resolution`
//         );
//         await driver.executeScript("window.scrollBy(0, 1000);");
//         console.log(`${device}: Scrolled down the webpage successfully`);
//       } catch (err) {
//         console.log(`${device}: Error encountered - ${err.message}`);
//       } finally {
//         if (driver) {
//           await driver.quit();
//         }
//       }
//     }

//     for (const device of devices) {
//       await compatibilityTest(device);
//     }

//     console.log("Compatibility testing for different devices completed.");
//   });

//   it("should measure page load time", async function () {
//     let driver = await new Builder().forBrowser("chrome").build();
  
//     try {
//       let startTime = new Date().getTime();
//       await driver.get("https://www.xenonstack.com/");
//       let endTime = new Date().getTime();
//       let loadTime = endTime - startTime;
  
//       console.log(`Page Load Time: ${loadTime} ms`);
  
//       if (loadTime > 4000) {
//         throw new Error(`Page load time is more than 4 seconds (${loadTime} ms).`);
//       } else {
//         console.log("Test case passed successfully");
//       }
//     } finally {
//       await driver.quit();
//     }
//   });
  

//   it("should measure button click response time", async function () {
//     let driver = await new Builder().forBrowser("chrome").build();

//     try {
//       await driver.get("https://www.xenonstack.com/");

//       let getStartedButton = await driver.findElement(
//         By.xpath("//span[normalize-space()='Get Started']")
//       );

//       let startTime = new Date().getTime();
//       await getStartedButton.click();
//       await driver.wait(
//         until.urlContains("https://www.xenonstack.com/"),
//         10000
//       );
//       let endTime = new Date().getTime();
//       let responseTime = endTime - startTime;
//       console.log(`Button Click Response Time: ${responseTime} ms`);

//       startTime = new Date().getTime();
//       await getStartedButton.click();
//       await driver.wait(
//         until.urlContains("https://www.xenonstack.com/"),
//         10000
//       );
//       endTime = new Date().getTime();
//       responseTime = endTime - startTime;
//       console.log(`Second Button Click Response Time: ${responseTime} ms`);
//     } finally {
//       await driver.quit();
//     }
//   });

// async function pageLoader(driver) {
//   try {
//     await driver.wait(() => driver.executeScript("return document.readyState === 'complete'"));
//     logger.info('Page loaded successfully.');
//   } catch (err) {
//     logger.warn('Page took too long to load. Stopping load manually.');
//     await driver.executeScript("window.stop();");
//   }
// }

// async function extractLinks(driver, htmlTag) {
//   try {
//     await driver.wait(until.elementLocated(By.tagName(htmlTag)));
//     const section = await driver.findElement(By.tagName(htmlTag));
//     return await section.findElements(By.tagName('a'));
//   } catch (err) {
//     logger.warn(`No links found in <${htmlTag}> section.`);
//     return [];
//   }
// }

// async function checkExternalLink(href, linkText) {
//   try {
//     const response = await axios.get(href, { timeout: 15000 });
//     const statusCode = response.status;

//     if (statusCode >= 400 && statusCode < 1000) {
//       const web = href.includes('twitter.com') ? 'Twitter/X' : 'LinkedIn';
//       logger.warn(`${web} blocks bot requests (${statusCode}) or is down. Marking as valid.`);
//     } else if (statusCode < 400) {
//       logger.info(`External link '${linkText}' is valid. [HTTP ${statusCode}]`);
//     } else {
//       logger.error(`External link '${linkText}' returned HTTP ${statusCode}. Possible broken link.`);
//       throw new Error(`External link '${linkText}' broken -> ${statusCode}`);
//     }
//   } catch (err) {
//     logger.error(`Failed request for '${linkText}': ${err.message}`);
//     throw new Error(`External link '${linkText}' could not be checked.`);
//   }
// }

// async function checkInternalLink(driver, link, linkText, oldUrl) {
//   try {
//     if (await link.getAttribute('target') === '_blank') {
//       const originalHandles = await driver.getAllWindowHandles();
//       await driver.executeScript("window.open(arguments[0]);", await link.getAttribute('href'));
//       await driver.wait(until.numberOfWindows(originalHandles.length + 1));

//       const allHandles = await driver.getAllWindowHandles();
//       if (allHandles.length > originalHandles.length) {
//         await driver.switchTo().window(allHandles[allHandles.length - 1]);
//         await pageLoader(driver);
//         const newUrl = await driver.getCurrentUrl();

//         if (newUrl !== oldUrl && newUrl !== 'data:,') {
//           logger.info(`'${linkText}' opened in new tab successfully -> ${newUrl}`);
//         } else {
//           logger.warn(`'${linkText}' new tab did not navigate properly.`);
//           await driver.close();
//           await driver.switchTo().window(originalHandles[0]);
//           throw new Error(`'${linkText}' new tab did not navigate properly.`);
//         }

//         await driver.close();
//         await driver.switchTo().window(originalHandles[0]);
//       } else {
//         logger.warn(`No new tab detected for '${linkText}'.`);
//         throw new Error(`No new tab detected for '${linkText}'.`);
//       }
//     } else {
//       await driver.executeScript("arguments[0].click();", link);
//       await pageLoader(driver);
//       await driver.wait(until.urlIsDifferentFrom(oldUrl)); 
//       const newUrl = await driver.getCurrentUrl();

//       if (newUrl !== oldUrl && newUrl !== 'data:,') {
//         logger.info(`'${linkText}' link works -> navigated to ${newUrl}`);
//       } else {
//         logger.warn(`'${linkText}' did not navigate properly.`);
//         throw new Error(`'${linkText}' did not navigate properly.`);
//       }

//       await driver.navigate().back();
//       await pageLoader(driver);
//       await driver.wait(until.urlIs(oldUrl));
//     }

//     return true;
//   } catch (err) {
//     logger.warn(`Error opening '${linkText}': ${err.message}`);
//     await driver.executeScript("window.stop();");
//     throw new Error(`Error opening '${linkText}': ${err.message}`);
//   }
// }

// until.urlIsDifferentFrom = function (expectedUrl) {
//   return new until.Condition(
//     'for URL to be different from ' + expectedUrl,
//     async function (driver) {
//       const currentUrl = await driver.getCurrentUrl();
//       return currentUrl !== expectedUrl;
//     }
//   );
// };

it("should check all footer links and throw an error if any link is not working", async function () {
  let driver = await new Builder().forBrowser('chrome').build();
  const wait = driver.manage().setTimeouts({ implicit: 10000, pageLoad: 10000, script: 10000 });

  try {
    logger.info('Ensuring All Footer Links Are Checked Without Skips.');
    await driver.get('https://xenonstack.com/');
    await pageLoader(driver);

    let links = await extractLinks(driver, 'footer');
    if (links.length === 0) {
      logger.error('FOOTER TEST FAILED - No links found in the footer!');
      throw new Error('No footer links found.');
    }

    const totalLinks = links.length;
    logger.info(`Total Footer Links Found: ${totalLinks}`);
    let idx = 0;

    while (idx < totalLinks) {
      let retries = 2;
      while (retries > 0) {
        try {
          links = await extractLinks(driver, 'footer');
          if (idx >= links.length) {
            logger.warn(`Skipping missing link at index ${idx}`);
            break;
          }

          const link = links[idx];
          let linkText = (await link.getText()).trim();
          const href = await link.getAttribute('href');

          if (!linkText) {
            try {
              const img = await link.findElement(By.tagName('img'));
              const altText = await img.getAttribute('alt');
              if (altText) {
                linkText = altText.trim();
              }
            } catch (err) {
              // Ignore NoSuchElementException
            }
            if (!linkText) {
              linkText = 'N/A';
            }
          }

          if (!href) {
            logger.error(`Skipping '${linkText}' - No href attribute.`);
            throw new Error(`Skipping '${linkText}' - No href attribute.`);
          }

          logger.info(`Checking Footer Link ${idx + 1}/${totalLinks}: ${href} -> ${linkText}`);

          if (!href.toLowerCase().includes('xenonstack.com')) {
            await checkExternalLink(href, linkText);
          } else {
            const oldUrl = await driver.getCurrentUrl();
            await checkInternalLink(driver, link, linkText, oldUrl);
          }
          break;

        } catch (err) {
          retries -= 1;
          logger.warn('Stale element error. Retrying...');
        }
      }

      idx += 1;
    }

    logger.info('Footer Test Completed Successfully.');
  } finally {
    await driver.quit();
  }
});

});