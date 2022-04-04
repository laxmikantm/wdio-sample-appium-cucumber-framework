const {config} = require('./wdio.conf');

config.capabilities = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
    updateJob: false,
    exclude: [

    ],
  
    capabilities: [
        {
            project: 'First Webdriverio Android Project',
            build: 'Webdriverio Android',
            name: 'first_test',
            device: 'Google Pixel 3',
            os_version: '9.0',
            app: process.env.BROWSERSTACK_APP_ID || 'bs://af4cb46e868754e4f2170a67849f920882d66be3',
            'browserstack.debug': true
        }
    ],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
};

config.cucumberOpts.tagExpression = '@bstsAndroidApp';// pass tag to run tests specific to BSTS Android

exports.config = config;


//

