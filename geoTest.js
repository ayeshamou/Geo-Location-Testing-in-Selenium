const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testGeoLocation(lat, lon) {
  
  // Initialize Chrome driver
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Create CDP session after driver initialization
    const cdpSession = await driver.createCDPConnection('page');

    // Override geolocation using CDP session
    await cdpSession.send('Emulation.setGeolocationOverride', {
      latitude: lat,
      longitude: lon,
      accuracy: 1,
    });

    // Open product page
    await driver.get('https://vegmove.techsfera.dev/product/colorbar-waterproof-liquid-eyeliner-black-with-flexible-applicator');

    // XPath for Add to Cart button
    const addToCartXPath = "//button[@class = 'border-[1px] border-[#1A1A1A] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-dark w-full flex justify-center h-[50px] items-center gap-2 rounded-full font-md font-bold']";

    // XPath for unavailable message
    const unavailableMsgXPath = "//button[contains(text(), 'Out of Stock')]";

    // Try to find Add to Cart button to detect availability
    try {
      await driver.wait(until.elementLocated(By.xpath(addToCartXPath)), 5000);
      console.log(`This product available at coordinates (${lat}, ${lon})`);

      await driver.sleep(5000);

    } catch {

      // If Add to Cart button is not found, check for unavailable message
      try {
        await driver.wait(until.elementLocated(By.xpath(unavailableMsgXPath)), 5000);
        console.log(`This product is unavailable at coordinates (${lat}, ${lon})`);

      } catch {
        console.log(`Could not determine this product's availability at coordinates(${lat}, ${lon})`);
      }
    }
    
  } finally {
    await driver.quit();
  }
}

(async () => {
  console.log('Testing with available coordinates');
  await testGeoLocation(22.572084, 88.307026);

  console.log('Testing with unavailable coordinates');
  await testGeoLocation(55.734677, 37.753844);
})();