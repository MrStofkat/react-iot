## React IoT Web Application
This repository represents a fully functional IoT/domotica implementation in React. It connects to an ESP8266 micro controller that has a 433mhz sender and receiver module attached to it. With this it directly controls a set of 'dumb' 433mhz wall socket switches, making them 'smart'. It uses an RESTless API considering the limitations of the ESP chip.

# How it works
The ESP essentially has enough flash memory to store the entire React application on chip, but the React app can also be hosted seperately. The ip-address is for now hardcoded, but it can be found dynamically in a fancy manner with WebRTC (future release) or with a brute force local ip scan. The latter is the easiest to achieve.

# Redux v.s. AppStateComponents
We chose in this project to not use Redux. Redux is a very powerful tool and it makes state management that much easier. It however requires a lot of boilerplating and does not hold true to the DRY principle. Instead we use something in working copy calle AppStateComponents. It's a much cleaner implementation, that requires almost no additional code. It's written fully functional just like Redux and it should be rather easy to switch back and forth between the two.


