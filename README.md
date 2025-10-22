# VegMove Geolocation Test (Selenium + JavaScript)

This project automates geolocation-based product availability testing on (https://vegmove.techsfera.dev) using **Selenium WebDriver** in JavaScript. It mocks the browser's geolocation using Chrome DevTools Protocol (CDP) and checks product availability with XPath locators.

## Prerequisites
- **Node.js** (v16 or later)  
  Download & install: [https://nodejs.org/](https://nodejs.org/)

- **Google Chrome** (latest stable version)  
  Make sure Chrome is installed on your system.

## Project Setup
1. **Clone with git clone https://github.com/ayeshamou/Geo-Location-Testing-in-Selenium.git or download** this repository.
2. **Open terminal** in the project folder and run:
   ```bash
   npm init -y
   npm install selenium-webdriver chromedriver

## How It Works
- Uses Chrome DevTools Protocol to override browser geolocation.
- Tests two sets of coordinates:
- Available location → 22.572084, 88.307026
- Unavailable location → 55.734677, 37.753844
- Opens the product page: https://vegmove.techsfera.dev/product/colorbar-waterproof-liquid-eyeliner-black-with-flexible-applicator

## Checks for:
- "Add to Cart" button (product available)
- Unavailable message (product unavailable)
- Logs results in the terminal.

## To run the script in your terminal:
node geoTest.js

## Example Output
- Testing with available coordinates, output - This product is available at (22.572084, 88.307026)
- Testing with unavailable coordinates, output - This product is unavailable at (55.734677, 37.753844)
