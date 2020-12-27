// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;



// Callback function to complete GET '/all'
app.get('/all', function(req, res) {
    res.send(projectData);
    //console.log(projectData, '/all');
});

app.post('/addData', function (req, res) {
    var newEntry = {
        temperature: req.body.temp,
        date: req.body.date,
        feelings: req.body.feelings,
    };
   // console.log(newEntry);

    projectData.push(newEntry);
   // console.log(projectData);
    // set HTTP status of response to 204 ("Created")
    res.status(200).end();
});

const server = app.listen(port, listening);

function listening() {
    console.log(`server running on port: ${port}`)
}

