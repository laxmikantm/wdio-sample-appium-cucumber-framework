class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename use command: adb devices
    }

    static platFormVersion() {
        return '11.0'; // pass the platform version
    }

    static appName() {
        return 'AwesomeApp.apk'; // pass the apk name
    }
}

module.exports = AndroidInfo;