const input = document.querySelector("#city");
const btn = document.querySelector("#btn");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const pressure = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");

btn.addEventListener("click", getWeather);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeather();
});




async function getWeather() {
    const city = input.value.trim();
    if (!city) return;

    const apiKey = "ed602a427ecf8ac3b790198a19df3b25";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

                cityName.textContent = "loading...";
            temperature.textContent = "0°C";
            wind.textContent = "loading..."
            weather.textContent = "loading..."
            weatherIcon.src = "";
            weatherIcon.alt = "";
    try {

        let res = await fetch(url)

        let data = await res.json();
        if (data.cod !== 200) {
            cityName.textContent = "City not found";
            temperature.textContent = "0°C"
            wind.textContent = "wind"
            weather.textContent = "weather"
            weatherIcon.src = "./img/1d7ed459a70823cb1f56251769a0ad58.jpg";
            weatherIcon.alt = "";
            return;
        }
        console.log(data);


        cityName.textContent = data.name;
        temperature.textContent = Math.floor(data.main.temp) + "°C";
        wind.textContent = "wind" + " " + Math.floor(data.wind.speed) + " m/s";
        weather.textContent = "weather: " + data.weather[0].description;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

    } catch (error) {
        result.textContent = "Error loading data(";
    }

}



