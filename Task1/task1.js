const apiKey = 'b03a0ce10b80cef582e4e8b333cba561';
async function fetchWeatherData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kurnool&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const weatherDataContainer = document.querySelector('.weather-data');
    weatherDataContainer.innerHTML = `
      <h2>${cityName} Weather</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${weatherDescription}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    const weatherDataContainer = document.querySelector('.weather-data');
    weatherDataContainer.innerHTML = 'Failed to fetch weather data.';
  }
}
window.addEventListener('load', fetchWeatherData);
