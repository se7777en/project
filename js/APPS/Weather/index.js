'use strict';

const container = document.querySelector('.container'),
      search = document.querySelector('.search-box button'),
      weatherBox = document.querySelector('.weather-box'),
      weatherDetails = document.querySelector('.weather-details'),
      error404 = document.querySelector('.not-found'),
      searchOnEnter = document.querySelector('.search-box input'),
      lon = document.querySelector('.location .lon'),
      lat = document.querySelector('.location .lat'),
      loc = document.querySelector('.location');

    
      const APIKey = 'c0ed29dd64ccbf9bc67b00b213484cf0';  

function weather(){             
    const city = document.querySelector('.search-box input').value;

    if(city == ''){ 
        loc.classList.add('hide');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response => Response.json()).then(json => {
        //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${APIKey}`).then(Response => Response.json()).then(json => {
        if(json.cod === '404'){
            container.style.heigth = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            
            lon.innerHTML = '0';
            lat.innerHTML = '0';
            loc.classList.add('hide');
            return;
        }

        

        
        error404.style.display = 'none';
        error404.classList.add('remove');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');

        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        console.log(json.weather[0].main);
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Haze':
                image.src = 'images/haze.png';
                break;

            default:
                image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
       
        loc.classList.remove('hide');
        lon.innerHTML = json.coord.lon;
        lat.innerHTML = json.coord.lat;
      


        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '600px';
        
    });
}



      search.addEventListener('click',() => {
        weather();
      });


     //on click enter 
      searchOnEnter.addEventListener('keyup', e =>{
        if(e.code === 'Enter'){
            weather();
        }
    });





   