# Rick and Morty Character Viewer App



A simple Rick and Morty character viewing application that allows you to search for characters and view their images.

## Features

- Character search by name.
- Display of character's image and name.
- Error handling for characters not found.
- Clean and straightforward design.

 ![App Preview](appPreview.gif)

## Requirements

- Node.js
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

## Installation

1. Clone the repository:
[git clone https://github.com/isc1998/rick-and-morty-character-viewer.git]

2. Install the app
```bash
watchman watch-del-all
rm -rf yarn.lock package-lock.json node_modules
rm -rf android/app/build
rm ios/Pods ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
npm install && cd ios && pod update && cd ..
npm start -- --reset-cache
