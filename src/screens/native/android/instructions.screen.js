class InstructionsScreen{
    constructor(){
        this.dashboardLink =
            '//android.view.View[@resource-id="Dashboard tab"]';
        this.settingsLink =
            '//android.view.View[@resource-id="Settings tab"]';
        this.sideMenu =
            '//android.widget.ScrollView[@resource-id="sidemenu"]';    
        this.sideMenuButton =
            '//android.widget.TextView[@resource-id="sidemenuButton"]'; 
        this.alertTitle =
            'android:id/alertTitle';     
    }
}

module.exports = new InstructionsScreen();
