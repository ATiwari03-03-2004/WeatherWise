let logo = document.querySelector(".main-body .nav .logo #weatherwise_icon");

let city = "Nagpur";
let searchInput = document.querySelector(".main-body .nav .search .bar input");
let searchButton = document.querySelector(
  ".main-body .nav .search .bar .browse"
);

let currentWeather = document.querySelector(".main-body .main");
let hourlyWeather = document.querySelector(".main-body .hour-weather");
let button = document.querySelector(".main-body .main .getInfo button");
let returnButton = document.querySelector(".main-body .hour-weather .return");

let loc = document.querySelector(
  ".main-body .main .current-day-weather .head .location h2"
);
let locsLatLong = document.querySelectorAll(
  ".main-body .main .current-day-weather .head .location ul p span"
);
let date = document.querySelector(
  ".main-body .main .current-day-weather .head .date p span"
);

let currentTimeIcon = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .condition #current_time_icon"
);
let currentTimeTemp = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .weather .current-temp span"
);
let currentTimeCloud = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .weather .cloud span"
);
let currentTimeHumidity = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .weather .humidity span"
);
let currentTimeWindDirection = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .weather .wind-dir span"
);
let currentTimeWindSpeed = document.querySelector(
  ".main-body .main .current-day-weather .current-weather .box1 .weather .wind-speed span"
);

let dayIcon = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .condition #current_time_icon"
);
let dayMinTemp = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .weather .temp span"
);
let dayMaxTemp = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .weather .temp1 span"
);
let dayAvgTemp = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .weather .temp2 span"
);
let dayChanceRain = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .weather .rain span"
);
let dayAvgHumidity = document.querySelector(
  ".main-body .main .current-day-weather .day-weather .box1 .weather .humidity span"
);

let sunrise = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .sun .sunrise span"
);
let sunset = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .sun .sunset span"
);
let moonrise = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .moon .moonrise span"
);
let moonset = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .moon .moonset span"
);
let illumination = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .moon .moon-illumination span"
);
let phase = document.querySelector(
  ".main-body .main .current-day-weather .astro-status .moon .moon-phase span"
);

let hourWeatherIcon = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .conditon .image img"
);
let hourWeatherTemp = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .weather .current-temp span"
);
let hourWeatherCloud = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .weather .cloud span"
);
let hourWeatherHumidity = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .weather .humidity span"
);
let hourWeatherWindDirection = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .weather .wind-dir span"
);
let hourWeatherWindSpeed = document.querySelectorAll(
  ".main-body .hour-weather .hr24Weather .hourly-weather .weather .wind-speed span"
);

let url =
  "http://api.weatherapi.com/v1/forecast.json?key=ccbf46e3a6494897bc4142824241110&days=1&alerts=yes&q=";

async function getForecast() {
  try {
    if (searchInput.value.length > 0) city = searchInput.value;
    let response = await axios.get(url + city + ",IN");
    if (response.data.location.name != response.data.location.region)
      loc.innerHTML = `&nbsp;&nbsp${response.data.location.name}, ${response.data.location.region}&nbsp;&nbsp;`;
    else
      loc.innerHTML = `&nbsp;&nbsp${response.data.location.name}, India&nbsp;&nbsp;`;
    locsLatLong[0].innerText = response.data.location.lat;
    locsLatLong[1].innerText = response.data.location.lon;
    date.innerText = response.data.forecast.forecastday[0].date;
    currentTimeIcon.src = "https:" + response.data.current.condition.icon;
    currentTimeIcon.title = response.data.current.condition.text;
    currentTimeTemp.innerHTML = `${response.data.current.temp_c} &deg;C | ${response.data.current.temp_f} &deg;F`;
    currentTimeCloud.innerText = response.data.current.cloud;
    currentTimeHumidity.innerText = response.data.current.humidity;
    currentTimeWindDirection.innerText = response.data.current.wind_dir;
    currentTimeWindSpeed.innerText = response.data.current.wind_kph;
    dayIcon.src =
      "https:" + response.data.forecast.forecastday[0].day.condition.icon;
    dayIcon.title = response.data.forecast.forecastday[0].day.condition.text;
    dayMinTemp.innerHTML = `${response.data.forecast.forecastday[0].day.mintemp_c} &deg;C | ${response.data.forecast.forecastday[0].day.mintemp_f} &deg;F`;
    dayMaxTemp.innerHTML = `${response.data.forecast.forecastday[0].day.maxtemp_c} &deg;C | ${response.data.forecast.forecastday[0].day.maxtemp_f} &deg;F`;
    dayAvgTemp.innerHTML = `${response.data.forecast.forecastday[0].day.avgtemp_c} &deg;C | ${response.data.forecast.forecastday[0].day.avgtemp_f} &deg;F`;
    dayChanceRain.innerText =
      response.data.forecast.forecastday[0].day.daily_chance_of_rain;
    dayAvgHumidity.innerText =
      response.data.forecast.forecastday[0].day.avghumidity;
    sunrise.innerText = response.data.forecast.forecastday[0].astro.sunrise;
    sunset.innerText = response.data.forecast.forecastday[0].astro.sunset;
    moonrise.innerText = response.data.forecast.forecastday[0].astro.moonrise;
    moonset.innerText = response.data.forecast.forecastday[0].astro.moonset;
    illumination.innerText =
      response.data.forecast.forecastday[0].astro.moon_illumination;
    phase = response.data.forecast.forecastday[0].astro.moon_phase;
    for (let i = 0; i < 24; i++) {
      hourWeatherIcon[i].src =
        "https:" + response.data.forecast.forecastday[0].hour[i].condition.icon;
      hourWeatherIcon[i].title =
        response.data.forecast.forecastday[0].hour[i].condition.text;
      hourWeatherTemp[
        i
      ].innerHTML = `${response.data.forecast.forecastday[0].hour[i].temp_c} &deg;C | ${response.data.forecast.forecastday[0].hour[i].temp_f} &deg;F`;
      hourWeatherCloud[i].innerText =
        response.data.forecast.forecastday[0].hour[i].cloud;
      hourWeatherHumidity[i].innerText =
        response.data.forecast.forecastday[0].hour[i].humidity;
      hourWeatherWindDirection[i].innerText =
        response.data.forecast.forecastday[0].hour[i].wind_dir;
      hourWeatherWindSpeed[i].innerText =
        response.data.forecast.forecastday[0].hour[i].wind_kph;
    }
  } catch (error) {
    alert("Error: Failed to fulfill your request, Retry!");
    console.log("Error: ", error);
  }
}

getForecast();

searchInput.addEventListener("keydown", async (e) => {
  if (e.key == "Enter") await getForecast();
});

searchButton.addEventListener("click", async (e) => {
  await getForecast();
});

button.addEventListener("click", () => {
  currentWeather.style.display = "none";
  hourlyWeather.style.display = "block";
});

returnButton.addEventListener("click", () => {
  currentWeather.style.display = "block";
  hourlyWeather.style.display = "none";
});

logo.addEventListener("click", () => {
  if (currentWeather.style.display === "none") {
    currentWeather.style.display = "block";
    hourlyWeather.style.display = "none";
  }
});
