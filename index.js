// index.js
const apiKey = 'YOUR_API_KEY'; // Get from OpenWeatherMap.org

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherInfo = document.querySelector('.weather-info');

async function fetchWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        updateWeather(data);
        weatherInfo.style.display = 'block';
    } catch (error) {
        showError(error.message);
    }
}

function updateWeather(data) {
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    cityName.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} km/h`;
    
    // Update weather icon based on weather condition
    const weatherMain = data.weather[0].main;
    switch(weatherMain) {
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Fog':
            weatherIcon.src = 'images/mist.png';
            break;
        case 'Snow':
            weatherIcon.src = 'images/snow.png';
            break;
        default:
            weatherIcon.src = 'images/clear.png';
    }
}

function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;
    document.querySelector('.container').appendChild(errorElement);
    setTimeout(() => errorElement.remove(), 2000);
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    }
});

// Initial load
fetchWeather('London');