# WebdriverIO-V6-appium-cucumber-boilerplate

Boilerplate project to run native and browser for android and ios using cucumber with page object pattern.

## Based on

- WebdriverIO v6
- cucumber v6
- Node version 10.16 or higher
- Appium

## Supports
- Native Android and iOS apps
- Android Chrome browser 
- iOS Safari browser 
- Supports Page Object Model
- Contains sample test scenarios in cucumber
- Supports multiple cucumber html reports

## Source
Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)

## Running tests

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.info.js` and `config/ios.info.js` respectively.

- Execute `npm run android` to run android native app

- Execute `npm run ios` to run ios native app

- Execute `npm run lint` to run eslint

- Execute `npm run allure-report` to generate the report
