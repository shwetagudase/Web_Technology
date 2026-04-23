const apiKey = "01b21ebc564e822de1f802baf7dcbbcf"; 

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("weatherResult");

button.addEventListener("click", () => {
    const city = input.value;

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    getWeather(city);
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        button.click(); 
    }
});

const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

const locationBtn = document.getElementById("locationBtn");
locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        result.innerHTML = "Geolocation not supported";
    }
});

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    getWeatherByLocation(lat, lon);
}
function error() {
    result.innerHTML = "Location access denied";
}
async function getWeather(city) {
    try {
        result.innerHTML = "Loading...";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        console.log(data); 


        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const humidity = data.main.humidity;
        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${temp}°C</p>
            <p>☁️ Condition: ${weather}</p>
            <p>💧 Humidity: ${humidity}%</p>
        `;
    } catch (error) {
        result.innerHTML = "Something went wrong";
    }
}
async function getWeatherByLocation(lat, lon) {
    try {
        result.innerHTML = " Loading...";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const humidity = data.main.humidity;

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${temp}°C</p>
            <p>☁️ Condition: ${weather}</p>
            <p>💧 Humidity: ${humidity}%</p>
        `;
    } catch (error) {
        result.innerHTML = "Unable to fetch location weather";
    }
}