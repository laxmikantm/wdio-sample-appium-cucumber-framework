class InstructionsScreen{
    constructor(){
        this.dashboardLink = 
            // 'Dashboard tab';
            '//XCUIElementTypeButton[@name="Dashboard tab"]';
        this.settingsLink =
            // 'Settings tab';
            '//XCUIElementTypeButton[@name="Settings tab"]';
    }
}

module.exports = new InstructionsScreen();