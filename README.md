# Weather-Journal App Project

### Ahmed Mohamed

## Weather Journal App (Web Development Professional Udacity Nanodegree)
#### What I used: HTML, CSS, Javascript (Vanilla)

### Project Objective

This project was about working with Web APIs and asynchronous code, creating a web app that uses OpenWeatherMap API to get weather based on user's location, and dynamically update UI.

### Building
To get the project up and running I followed these steps:

1. Setting up project environment, I have Node.js and packages installed(express body-parser cors), and included in my server.js file.
2. Added POST and GET routes to ensure correct retrieval of data from the server.
3. Acquired API credentials from OpenWeatherMap website.
4. Created async functions to fetch weather data and store it on my local server. 
5. Set up a function that updated UI dynamically.
   
## About

The backend `server.js` serves static html, css and client js. The front-end `website/app.js` makes API calls to `server.js`, `server.js` then makes a call to the OpenWeatherMap API to fetch the current temperature of a specifed location. The front-end js code then makes another API call to `server.js`, and dynamically updates the elements of the webpage.


   
