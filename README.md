# Stretch Coach

Stretch Coach is a FitBit app that assists with a stretch routine before a run or workout. The key features are that it will:

* Buzz every X seconds where X is a fixed settable interval
* Keep the screen on indefinitely
* List a set routine

![alt text](https://github.com/Radar3699/StretchCoach/blob/master/demo/P1.png)

I created this because I found the default stopwatch super clunky for stretching. When your watch arm is busy you have to stop stretching every 10 seconds or so to free up that watch arm to check the time (sometimes requiring your other hand to wake it from sleep), and hope you check it around 60 seconds to switch. Even when your not-watch arm is being used (so you have your watch arm extended and are staring at the seonds ticking up) the screen still often turns off so you have to shake your wrist a bunch or stop stretching to use your other hand to press the wake up button. Additionally between stretches it requires a short press followed by a long press to reset between positions.

I couldn't find a better stopwatch app for my use case so created this to make stretching a little easier.

## Setting up

1. Log in with your fitbit account at [FitBit studio](https://studio.fitbit.com/projects) and follow the [instructions](https://dev.fitbit.com/blog/2017-09-26-fitbit-sdk-preview-get-started/) to pair your device. 

2. Import the project and **add your routine** by modifying the list of positions at the top of app/index.js.

3. Hit the build button. 

## Example

Simply launch the app and start the first position. Every buzz switch positions. 

![alt text](https://github.com/Radar3699/StretchCoach/blob/master/demo/V1.gif)

If you forget which one is next, just glance at the screen (which is guarenteed to be on, no wrist shaking!) to check. 

By default the interval is 60 seconds, to adjust it just tap the up or down button to bumpt it up or down 30 seconds. 

![alt text](https://github.com/Radar3699/StretchCoach/blob/master/demo/V2.gif)

## Built With

* [FitBit Studio](http://www.dropwizard.io/1.0.2/docs/) - The FitBit IDE
* [Fitbit OS Simulator](https://maven.apache.org/) - Simulator used for development
* [Flaticon.com](https://www.flaticon.com) - Icons used

## Authors

* **Duncan Stothers** - [Follow me!](https://github.com/Radar3699)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


