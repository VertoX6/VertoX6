        const appid = `90a3015c84512520fe32989b98c99e8e`;
        const btn = document.querySelector('.btn');
        const searchBox = document.querySelector('.search-box');
        const weatherDisplay = document.querySelector('.weather-display');

        btn.addEventListener('click', () => {
            const input = document.querySelector('input');
            const cityName = input.value;
            const APIKey = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`;
           const getAPI = () => new Promise((udane, nieudane) => fetch(APIKey).then(res => res.json())
           .then(data => {
           let weatherApp = {
            cod: data.cod,
            name: data.name,
           country: data.sys.country,
            weather: data.weather[0].description,
            main: data.weather[0].main,
            pressure: data.main.pressure,
            timezone: data.timezone,
            temperature: data.main.temp,
           }
        weatherDisplay.style.display = 'block';
        weatherDisplay.innerHTML = `
        <h1>WEATHER FOR: <br>${(weatherApp.name).toUpperCase()}</h1>
        <p>COUNTRY: ${weatherApp.country}</p>
        <p>Timezone: + ${weatherApp.timezone/3600} GMT</p>
        <p>Weather: ${weatherApp.main}</p>
        <p>Temperature: ${(weatherApp.temperature-273).toFixed()} °C</p>
        <p>Pressure: ${weatherApp.pressure} h/Pa</p>`;
        console.log(data);
        weatherDisplay.style.animation = 'show 1s ease';
        udane()
        }).catch(error =>{
        weatherDisplay.style.display = 'block';
        weatherDisplay.innerHTML = `
        <h1>City not found.</h1>`;
        console.log('error');
        weatherDisplay.style.animation = 'show 1s ease';
        nieudane();
        })
        );
        getAPI()
    })
