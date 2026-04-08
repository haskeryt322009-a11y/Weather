const input = document.querySelector("#city");
const result = document.querySelector("#result");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getWeather);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeather();
});


async function getWeather() {
    const city = input.value.trim();
    if (!city) return;

    const apiKey = "ed602a427ecf8ac3b790198a19df3b25";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        result.textContent = "Загрузка...";
        let res = await fetch(url)

        let data = await res.json();
        if (data.cod !== 200) {
            result.textContent = "Город не найден ❌";
            return;
        }
        console.log(data);

result.textContent = `
Город: ${data.name}
Температура: ${data.main.temp}°C
Погода: ${data.weather[0].description}
`;

    } catch (error) {
        result.textContent = "Ошибка загрузки данных ❌";
    }
}



