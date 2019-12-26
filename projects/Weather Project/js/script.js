//Variables and Arrays
let cities = [];
let savedCities = [];
let currentCity = 0;

let cityName = document.getElementById('cityName');
let city = document.getElementById('userCity');
let callWeather = document.getElementById('loadWeather');

//Today's Info
let currentDate = document.getElementById('currentDate');
let weatherHigh = document.getElementById('weatherHigh');
let weatherLow = document.getElementById('weatherLow');
let weatherIMG = document.getElementById('weatherIMG');
//Day1 Info
let Date1 = document.getElementById('Date1');
let forecast1High = document.getElementById('forecast1High');
let forecast1Low = document.getElementById('forecast1Low');
let forecast1IMG = document.getElementById('forecast1IMG');
//Day2 Info
let Date2 = document.getElementById('Date2');
let forecast2High = document.getElementById('forecast2High');
let forecast2Low = document.getElementById('forecast2Low');
let forecast2IMG = document.getElementById('forecast2IMG');
//Day3 Info
let Date3 = document.getElementById('Date3');
let forecast3High = document.getElementById('forecast3High');
let forecast3Low = document.getElementById('forecast3Low');
let forecast3IMG = document.getElementById('forecast3IMG');
//Day4 Info
let Date4 = document.getElementById('Date4');
let forecast4High = document.getElementById('forecast4High');
let forecast4Low = document.getElementById('forecast4Low');
let forecast4IMG = document.getElementById('forecast4IMG');



//HeavyWeather relates to the weather of the current day...and is a JoJo reference
if (localStorage.getItem('HeavyWeather')) {
    cities = JSON.parse(localStorage.getItem('HeavyWeather'));
    //console.log(cities);

    currentDate.innerText = new Date().toLocaleDateString();
    weatherHigh.innerText = `High: ${Math.round(cities[currentCity].main.temp_max)}°F`;
    weatherLow.innerText = `Low: ${Math.round(cities[currentCity].main.temp_min)} °F`;
    weatherIMG.setAttribute('src', 'http://openweathermap.org/img/wn/' + cities[currentCity].weather[0].icon + '@2x.png');
    console.log('=======' +cities[currentCity].weather[0].icon);
    cityName.innerText = cities[currentCity].name;
} 
//WeatherReport relates to to forecast weather... and is also a JoJo reference...and is HeavyWeather's Stand
if (localStorage.getItem('WeatherReport')) { 
    savedCities = JSON.parse(localStorage.getItem('WeatherReport'));

    console.log(savedCities);

    //Date1.innerText = new Date().toLocaleDateString();
    setDate();
    
    Date1.innerText = setDate(1);
    forecast1High.innerText = `High: ${Math.round(savedCities[0].list[7].main.temp_max)} °F`;
    forecast1Low.innerText = `Low: ${Math.round(savedCities[0].list[7].main.temp_min)} °F`;
    console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[7].weather[0].icon}@2x.png`);
    forecast1IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[7].weather[0].icon}@2x.png`);

    Date2.innerText = setDate(2);
    forecast2High.innerText = `High: ${Math.round(savedCities[0].list[15].main.temp_max)} °F`;
    forecast2Low.innerText = `Low: ${Math.round(savedCities[0].list[15].main.temp_min)} °F`;
    console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[15].weather[0].icon}@2x.png`);
    forecast2IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[15].weather[0].icon}@2x.png`);

    Date3.innerText = setDate(3);
    forecast3High.innerText = `High: ${Math.round(savedCities[0].list[23].main.temp_max)} °F`;
    forecast3Low.innerText = `Low: ${Math.round(savedCities[0].list[23].main.temp_min)} °F`;
    console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[23].weather[0].icon}@2x.png`);
    forecast3IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[23].weather[0].icon}@2x.png`);

    Date4.innerText = setDate(4);
    forecast4High.innerText = `High: ${Math.round(savedCities[0].list[31].main.temp_max)} °F`;
    forecast4Low.innerText = `Low: ${Math.round(savedCities[0].list[31].main.temp_min)} °F`;
    console.log(`http://openweatherma.org/img/wn/${savedCities[currentCity].list[31].weather[0].icon}@2x.png`);
    forecast4IMG.setAttribute('src', `http://openweathermap.org/img/wn/${savedCities[currentCity].list[31].weather[0].icon}@2x.png`);
 } 

//Buttons & Their Event Listeners
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

});

function setDate(num){
    let today = new Date();
    return `${(today.getMonth())+1} / ${(today.getDate())+num}`;
    //return date;
}

let delBtn = document.getElementById('delBtn');
delBtn.addEventListener('click', function (e) {
    //this.parentElement.parentElement.remove();
});

let prevBtn = document.getElementById('prevBtn');
prevBtn.addEventListener('click', function (e) {
    if (currentCity === cities.length - 1) {
        currentCity = 0;
    } else {
        currentCity++;
    }
});

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', function (e) {
    if (currentCity === cities.length - 1) {
        currentCity = 0;
    } else {
        currentCity++;
    }
});
// callWeather.addEventListener('click', function (e) {
//     summonWeather(); 
//     summonForecast();
// });

// city.addEventListener('keypress', function(e){
//     console.log('hello')
// })

city.addEventListener('keypress', function (e) {
   
    if (e.keyCode === 13) {
        console.log('after enter');
        if (cities.length > 0) {
            for (let i = 0; i < cities.length; i++) {
                console.log('after for loop')
                if (cities[i].name === cityName.value) {
                    alert('You have entered this location already. Please enter a new one.');
                    console.log('key dfsdkhf')
                    return;
                }
                else {
                    console.log('after else');
                    let url_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
                    let url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
                    let url_city_pt2 = city.value;
                    let url_temp_pt3 = "&units=imperial";
                    let url_key_pt4 = "&appid=4d8cd4f16d0817094a8e1d42bfc0faca";

                    let Weather = url_weather + url_city_pt2 + url_temp_pt3 + url_key_pt4;

                    let Forecast = url_forecast + url_city_pt2 + url_temp_pt3 + url_key_pt4;
                    summonWeather(Weather);
                    Storm(Forecast);
                    console.log(Weather);
                    city.value = "";
                    //saveCurrent();
                    
                }
            }
        }
        else {
            console.log('after else 2');
            let url_weather = "https://api.openweathermap.org/data/2.5/weather?q=";
            let url_forecast = "https://api.openweathermap.org/data/2.5/forecast?q=";
            let url_city_pt2 = city.value;
            let url_temp_pt3 = "&units=imperial";
            let url_key_pt4 = "&appid=4d8cd4f16d0817094a8e1d42bfc0faca";

            let Weather = url_weather + url_city_pt2 + url_temp_pt3 + url_key_pt4;

            let Forecast = url_forecast + url_city_pt2 + url_temp_pt3 + url_key_pt4;
            summonWeather(Weather);
            console.log(Weather);
            Storm(Forecast);
            city.value = "";

            //saveCurrent();
        }

    }
    //console.log(cities);
});
 

//---------Load Your JSON Weather File--------//

function summonWeather(Weather) {
    let xmlhttp = new XMLHttpRequest();
    //Put your weather API URL and KEY here
    //let url = "";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            // let obj = {
            //     tempHigh: myArr.main.temp_max,
            //     tempLow: myArr.main.temp_min
            // }

            cities.push(myArr);
            
            //console.log(cities[0].main.temp);
            getWeather(cities);
            saveCurrent(cities);
        } 
    };
    xmlhttp.open("GET", Weather, true);
    xmlhttp.send();

  
}

function Storm(Forecast) {
    let xmlhttp = new XMLHttpRequest();
    //Put your weather API URL and KEY here
    //let url = "";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = JSON.parse(this.responseText);
            // let obj2 = {
            //     name: myArr.name,
            //     tempHigh: myArr.main.temp_max,
            //     tempLow: myArr.main.temp_min,
            //     date: myArr.sys.dt_txt
            // }

            savedCities.push(myArr);
            //console.log(savedCities);
            //getWeather(savedCities);
            saveForecast(savedCities);
        }
    };
    xmlhttp.open("GET", Forecast, true);
    xmlhttp.send();     
} 

// function populate(info){
//     cName.innerText = info.name;
// }

function getWeather(info) {
    //console.log(info);
    currentDate.innerText = new Date().toLocaleDateString();
}

function saveCurrent(current) {
    localStorage.setItem('HeavyWeather', JSON.stringify(current));
}

function saveForecast(forecast) {
    console.log(forecast);      
    localStorage.setItem('WeatherReport', JSON.stringify(forecast));
}