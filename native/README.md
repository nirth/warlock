Warlock
===

Warlock is the master of occult rituals. This is my hello world application using React Native for iOS and Android.

## Configuration

This document assumes that developer machine was setup per [React Native Getting Started Guide][react-native-getting-started]


## Project Lifecycle

### Commands

  * `npm test` -  runs developer friendly tests to use on own machine.
  * `npm run ci` - runs ci tests and generates xUnit output files.
  * `react-native run-ios` - will start application on default iOS device.
  * `react-native run-android` - will start application on currently running Android emultation.
  
### Developing Notes

Doing iterative testing on iOS is much faster, due to the fact thatiOS uses simulator instead of full emulator. My tactic so far was to do most of my cross-platform iterative activity on iOS and then check functionality on Android. 
  
### Debugging

Chrome Developer Tools can be used to debug application - [Debugging in React Native][react-native-debugging].

#### Chrome Dev Tools

 * Navigate to `http://localhost:8081/debugger-ui` in Chrome.
 * Open developer console (`⌘⌥J`).
 * Whisper a sigh of relief. You don't need to use XCode or Android Studio consoles.
 * `debugger` statement also works with certain limitations.
 
#### Clearing Chaches and Troubleshooting

As of May 2016 there are ∑t (Sigma T, stands for shit-tons) of bugs in React Native, and while it's awesome there is occasional need to troubleshoot.
Unless you know the solution, it's recommended to clear the caches:

 * Clear watchman temps: `watchman watch-del-all`
 * Clear App cache on the emulators/devices:
   * `react-native run-ios --reset-cache` - For iOS.
   * `react-native run-android --reset-cache` - For Android.
 * If problem persists, it's time to start praying, googling and maybe creating new emulator image just in case.
 

[react-native-getting-started]: https://facebook.github.io/react-native/docs/getting-started.html
[react-native-debugging]: https://facebook.github.io/react-native/docs/debugging.html