function getWeather() {
    const city = document.getElementById('cityInput').value.trim()
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3df74bf66d258a83eea9cbccb7317957&units=metric`
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.cod !== 200) {
          showError('City not found')
          return
        }
  
        const temp = Math.round(data.main.temp)
        const desc = data.weather[0].description
        const icon = data.weather[0].icon
        const humidity = data.main.humidity
        const wind = data.wind.speed
  
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        const humidityIcon = `https://cdn-icons-png.flaticon.com/128/728/728093.png`
        const windIcon = `https://cdn-icons-png.flaticon.com/128/11104/11104582.png`
  
        document.getElementById('weatherCard').innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="${iconUrl}" alt="${desc}">
          <p style="text-transform: capitalize;">${desc}</p>
          <p style="font-size: 24px;">${temp} °C</p>
  
          <div class="stat">
            <img src="${humidityIcon}" alt="Humidity">
            <span>Humidity: ${humidity}%</span>
          </div>
          <div class="stat">
            <img src="${windIcon}" alt="Wind">
            <span>Wind: ${wind} m/s</span>
          </div>
        `
        document.getElementById('weatherCard').classList.add('show')
      })
      .catch(() => {
        showError('Unable to fetch weather data')
      })
  }
  
  function showError(message) {
    const box = document.getElementById('weatherCard')
    box.innerHTML = `<p>${message}</p>`
    box.classList.add('show')
  }
  