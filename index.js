const apiKey = "72559f4ed9c87d5cdf4b3c08b39d3fed";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.ok) {
          var data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          let weather = data.weather[0].main;
          switch (weather) {
            case "Clouds":
              weatherIcon.src = "img/clouds.png";
              break;

            case "Clear":
              weatherIcon.src = "img/clear.png";
              break;

            case "Drizzle":
              weatherIcon.src = "img/drizzle.png";
              break;

            case "Mist":
              weatherIcon.src = "img/mist.png";
              break;

            case "Rain":
              weatherIcon.src = "img/rain.png";
              break;

            case "Snow":
              weatherIcon.src = "img/snow.png";
              break;

            default:
              weatherIcon.src = "img/clouds.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".invalid").style.display = "none";
        } else {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".invalid").style.display = "block";
            
        }
      }

      const weather = document.querySelector(".weather");
      searchBtn.addEventListener("click", () => {
        if (searchBox.value) {
          checkWeather(searchBox.value);
        }
      });

      searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          checkWeather(searchBox.value);
        }
      });