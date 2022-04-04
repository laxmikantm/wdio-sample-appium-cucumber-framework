const ActionHelper = require('../helpers/actionHelpers');
require('chai').should();

class DashboardPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/dashboard.screen.js`);
    }


    verifyDashboardPage() {
        ActionHelper.pause(2);
        ActionHelper.switchToNativeContext();
        ActionHelper.isVisible(this.getObjectLocator().dashboardTitle).should.be.true;
    }
    
}

module.exports = DashboardPage;
