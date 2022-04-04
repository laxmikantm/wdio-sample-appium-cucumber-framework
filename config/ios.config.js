const {config} = require('./wdio.conf');
const IosInfo = require('./ios.info');

config.capabilities = [
    {
        'cjson:metadata': {
            device: 'MacBook Pro 16',
            platform: {
                name: 'OSX',
                version: '12.1'
            },
            browser: {
                name: 'chrome',
                version: '99.0.4844.84',
            },
            // for an Native app
            app: {
                name: 'name.of.app.ipa',
                version: '1.2.3',
            },
        },
        platformName: 'iOS',
        noReset: true,
        fullReset: false,
        maxInstances: 1,
        automationName: 'XCUITest',
        deviceName: IosInfo.deviceName(),
        platformVersion: IosInfo.platFormVersion(),
        app: IosInfo.appName() //use - path.resolve(`./apps/${IosInfo.appName()}`) if passing a custom app
    }
];

config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config;
