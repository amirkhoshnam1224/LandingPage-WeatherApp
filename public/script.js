document.getElementById("load-weather-app").addEventListener("click", function () {
    const iframe = document.getElementById("weather-iframe");
    iframe.src = "https://vite-weather-app-7d14e.web.app/"; 
    document.getElementById("weather-container").style.display = "block"; 
    this.style.display = "none"; 
    getLocation(); 
  });
  document.getElementById("close-weather-app").addEventListener("click", function () {
    document.getElementById("weather-container").style.display = "none"; // مخفی کردن iframe
    document.getElementById("load-weather-app").style.display = "block"; // نمایش دوباره دکمه بارگذاری
  });
  document.getElementById("load-weather-app").addEventListener("click", function () {
    getLocation();
});
const fetchWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=222d90b4a36a08f635c2aff827c12d51&units=metric`);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching', error);
    }
};
const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude); 
            },
            (error) => {
                console.error('Error location:', error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
};
const displayWeatherData = (data) => {
    const weatherInfoElement = document.getElementById('weather-info');
    if (weatherInfoElement) {
        const weatherInfo = `
            <p>Weather in ${data.name}</ح>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
        weatherInfoElement.innerHTML = weatherInfo;
    } else {
        console.error(' not found.');
    }
};

  
  