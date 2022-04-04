const {config} = require('./wdio.conf');

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.js',
];
config.exclude = [
    // Exclude this one because the test can only be executed on emulators/simulators
    './tests/specs/**/app.biometric.login.spec.js',
];

// =============================
// Browserstack specific config
// =============================
// User configuration
config.user = process.env.BROWSERSTACK_USER || 'BROWSERSTACK_USER';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY';
// Use browserstack service
config.services = [
    'browserstack'
];

config.capabilities = [
    {

        'browserstack.debug': true,

        app: process.env.BROWSERSTACK_APP_ID || 'BROWSERSTACK_APP_ID',

        // Specify device and os_version for testing
        device: 'Google Pixel 3',
        os_version: '9.0',

        // Set other BrowserStack capabilities
        project: 'wdio-test-project',
        build: 'android',
        name: 'wdio-test'
    },
];

exports.config = config;