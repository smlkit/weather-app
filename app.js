"use strict";
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const dataDisplay = document.querySelector('.display');

getWeather('moscow');

function getWeather(city) {
  const request = fetch(`https://api.weatherapi.com/v1/current.json?key=c2e7f6f6dfd642fea0b113356222510&q=${city}`)
    .then(response => response.json())
    .then(data => {
      const mainCard = `
        <div class="card main-card blue">
          <p class="city">${data.location.name}</p>
          <div class="weather">
            <div class="main-degrees">
              <p>${Math.round(data.current.temp_c)}°C</p>
            </div>
            <div class="description">
              <p class="weather-description">${data.current.condition.text}</p>
              <p>Today, ${new Date(data.location.localtime).toLocaleString('en-us', {weekday:'long'})} ${new Date(data.location.localtime).getDate()}</p>
            </div>
          </div>
          <img src="img/weather/${data.current.condition.text}.png" alt="" class="main-img" />
          </div>
          <div class="card main-card white spacing">
            <p class="details">Details</p>
            <div class="flex humidity">
              <img src="img/details-humidity.svg" alt="" />
              <div class="info">
                <p class="param">Humidity</p>
                <p>${data.current.humidity}%</p>
              </div>
            </div>
            <div class="flex wind">
              <img src="img/details-wind.svg" alt="" />
              <div class="info">
                <p class="param">Wind</p>
                <p>${data.current.wind_kph} km/h</p>
              </div>
            </div>
            <div class="flex uv-index">
              <img src="img/details-uv-index.svg" alt="" />
              <div class="info">
                <p class="param">UV-index</p>
                <p>${data.current.uv}</p>
              </div>
            </div>
          </div>
        </div>
      `;

          dataDisplay.insertAdjacentHTML('beforeend', mainCard);
          dataDisplay.style.opacity = "1";
          searchBar.value = '';
    });
}

searchBtn.addEventListener('click', () => {
  if (searchBar.value) {
    dataDisplay.innerHTML = '';
    dataDisplay.style.opacity = "0";
    getWeather(searchBar.value);
  }
});

searchBar.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchBtn.click();
  }
})
