const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class InstructionsPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/instructions.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(2);
    }

    verifyDashboardTab() {
        // ActionHelper.getText(this.getObjectLocator().dashboardLink).should.equal('Dashboard');
        ActionHelper.isVisible(this.getObjectLocator().dashboardLink).should.be.true;
    }

    verifySettingsTab() {
        // ActionHelper.getText(this.getObjectLocator().settingsLink).should.equal('Settings');
        ActionHelper.isVisible(this.getObjectLocator().settingsLink).should.be.true;
    }

    clickOnDashboardLink() {
        ActionHelper.click(this.getObjectLocator().dashboardLink);
    }

    dragFromLeftEdgeOfScreen() {
        ActionHelper.pause(2);
        driver.touchAction([
            {action: 'press', x: 21, y: 958},
            {action: 'moveTo', x: 748, y: 958},
            {action: 'release'}
        ]).perform();
        ActionHelper.pause(2);
    }

    userMenuShouldSlideOut() {
        ActionHelper.pause(2);
        ActionHelper.isVisible(this.getObjectLocator().sideMenu).should.be.true;
    }

    clickOnSideMenuButton() {
        ActionHelper.click(this.getObjectLocator().sideMenuButton);
        ActionHelper.pause(2);
    }
    
    verifyAlert() {
        ActionHelper.waitForElement(this.getObjectLocator().alertTitle);
        ActionHelper.isVisible(this.getObjectLocator().alertTitle).should.be.true;
    }
    
}

module.exports = InstructionsPage;
