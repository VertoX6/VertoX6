        const appid = `90a3015c84512520fe32989b98c99e8e`;
        const btn = document.querySelector('.btn');
        const searchBox = document.querySelector('.search-box');
        const weatherDisplay = document.querySelector('.weather-display');
        let weatherImg = '';
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
           if(weatherApp.main === 'Snow') {
             weatherImg = 'https://openweathermap.org/img/wn/13d@2x.png'; 
        }
        else if(weatherApp.main === 'Rain') {
            weatherImg = 'https://openweathermap.org/img/wn/10d@2x.png'; 
        }else if(weatherApp.main === 'Clouds') {
        weatherImg = 'https://openweathermap.org/img/wn/02d@2x.png'; 
         }
        else if(weatherApp.main === 'Mist' || weatherApp.main === 'Smoke' || weatherApp.main === 'Haze' || 
        weatherApp.main === 'Dust' || weatherApp.main === 'Fog' || weatherApp.main === 'Sand' || weatherApp.main === 'Ash' ||
        weatherApp.main === 'Squall' || weatherApp.main === 'Tornado') {
    weatherImg = 'https://openweathermap.org/img/wn/50d@2x.png'; 
}
else if(weatherApp.main === 'Clear') {
    weatherImg = 'https://openweathermap.org/img/wn/01d@2x.png'; 
}
else if(weatherApp.main === 'Drizzle') {
    weatherImg = 'https://openweathermap.org/img/wn/09d@2x.png'; 
}
else if(weatherApp.main === 'Thunderstorm') {
    weatherImg = 'https://openweathermap.org/img/wn/11d@2x.png';
}
        weatherDisplay.style.display = 'block';
        weatherDisplay.innerHTML = `
        <h1>WEATHER FOR: <br>${(weatherApp.name).toUpperCase()}</h1>
        <p>COUNTRY: <b>${weatherApp.country}</b></p>
        <p>Timezone: <b>${weatherApp.timezone/3600} GMT</b></p>
        <img width="150px" src="${weatherImg}" alt="Weather Image">
        <p>Weather: <b>${weatherApp.main}</b></p>
        <p>Temperature: <b>${(weatherApp.temperature-273).toFixed()} °C</b></p>
        <p>Pressure: <b>${weatherApp.pressure} h/Pa</b></p>`;
        console.log(data);
        weatherDisplay.style.animation = 'show 1s ease';
        searchBox.style.opacity = ".5";
      
        }).catch(error =>{
        weatherDisplay.style.display = 'block';
        weatherDisplay.innerHTML = `
        <h1>City not found.</h1>`;
        console.log('error');
        weatherDisplay.style.animation = 'show 1s ease';
       
        })
        );
        getAPI()
    })
