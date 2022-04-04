const {Given, Then, When} = require('cucumber');


const InstructionsScreen = require('../pages/instructions.page');
const DashboardPage = require('../pages/dashboard.page');
const instructionsScreen = new InstructionsScreen();
const dashboardPage = new DashboardPage();

Given(/^I launch the app$/, () => {
    instructionsScreen.launchApp();
});

Then(/^Dashboard tab is present$/, () => {
    instructionsScreen.verifyDashboardTab();
})

Then(/^Settings tab is present$/, () => {
    instructionsScreen.verifySettingsTab();
});

When(/^I click on Dashboard link$/, ()  => {
    instructionsScreen.clickOnDashboardLink();
});

Then(/^Dashboard screen should open$/, () => {
    dashboardPage.verifyDashboardPage();
});

