const {Given, Then, When} = require('cucumber');

const InstructionsScreen = require('../pages/instructions.page');
const instructionsScreen = new InstructionsScreen();

Given(/^I re-launch the app$/, () => {
    instructionsScreen.launchApp();
});

When(/^drags from the left edge of screen$/, ()  => {
    instructionsScreen.dragFromLeftEdgeOfScreen();
});

Then('/user menu should slide out/', () => {
    instructionsScreen.userMenuShouldSlideOut();
});

When('/the user press the Ultimate answer button/', () => {
    instructionsScreen.clickOnSideMenuButton();
});

Then('/an alert pops out/', () => {
    instructionsScreen.verifyAlert();
});


