class IosInfo {
    static deviceName() {
        return 'iPhone 13'; // pass the device name (Simulator)
    }

    static platFormVersion() {
        return '15.0'; // pass the platform version of local iOS simulator
    }

    static appName() {
        return 'org.reactjs.native.example.AwesomeApp'; // pass the bundleid or ipa name
    }
}

module.exports = IosInfo;
