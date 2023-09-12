async function fetchRandomCountryData() {
    try {
          const response = await fetch('https://restcountries.com/v3.1/all');
      
      if (!response.ok) {
        throw new Error('Network response was not Ok.');
      }
      
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCountry = data[randomIndex];
      const countryName = randomCountry.name.common;
      const capital = randomCountry.capital[0];
      const population = randomCountry.population;
      const region = randomCountry.region;
      const currencyCode = randomCountry.currencies[Object.keys(randomCountry.currencies)[0]].code;
      const countryInfoContainer = document.querySelector('.country-info');
      countryInfoContainer.innerHTML = `
        <h2>${countryName}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <p>Currency Code: ${currencyCode}</p>
      `;
    } catch (error) {
      console.error('Error fetching country data:', error.message);
      const countryInfoContainer = document.querySelector('.country-info');
      countryInfoContainer.innerHTML = 'Failed to fetch country data.';
    }
  }
  window.addEventListener('load', fetchRandomCountryData);
  