Dev Environment Instructions

## Clone and set up Expo

In the folder you want do manage the project in (create a project directory):

`npm install -g expo-cli ` - `expo init leftward` - blank managed workflow

Clone the repo to a different folder, then copy the contents into the newly created Leftward folder, overwriting everything you are propted to.

From the Leftward folder: `git remote add origin https://github.com/leftward-app/app` - `git reset --hard origin/master` - `npm i`

## Configure an Android AVD and launch the app

Download Android Studio. Install it using defaults. Don't import settings.
To run a virtual device, do configure > AVD manager. Set up a phone and launch it.

With the AVD open: `expo start` - `a`
