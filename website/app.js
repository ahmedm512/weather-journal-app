// Personal API Key for OpenWeatherMap API
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const COUNTRY = 'us';
const API_KEY = '043f34bfc926e931a926f3209b6a3749';
const MY_SERVER_URL = 'http://localhost:3000';

// Event listener to add function to existing HTML DOM element
window.onload=function(){
btn = document.getElementById('generate');
btn.addEventListener('click', performAction);
}
/* Function called by event listener */
function performAction(e) {
    e.preventDefault();
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(zip, feelings);
}

/* Function to GET Web API Data*/
/* Function to POST data */
/* Function to GET Project Data */
getWeather = (zip, feelings) => {
   fetch(`${BASE_URL}?APPID=${API_KEY}&zip=${zip},${COUNTRY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // Add data
            if(data.message){
            alert(data.message);
            }
            //console.log(data);
            const temp = data.main.temp;
            const d = new Date();
            const formattedDate = d.getMonth() + 1 +'.' + d.getDate() + '.' + d.getFullYear();
            fetch('http://localhost:3000/addData', {
		            method: 'post',
		            headers: {'Content-Type': 'application/json'},
		            body: JSON.stringify({
		        	temp:temp,
                    date:formattedDate,
                    feelings:feelings
                })
        	});
        })
        .then(() => fetch('http://localhost:3000/all')) // GET returns the fetch promise
        .then(response => response.json())
        .then(allData => {
            //console.log(allData);
            const data = allData[allData.length - 1];
            document.getElementById('date').innerHTML = data.date;
            document.getElementById('temp').innerHTML = data.temperature;
            document.getElementById('content').innerHTML = data.feelings;
        });
       
}


