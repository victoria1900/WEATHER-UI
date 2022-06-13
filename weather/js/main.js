import {
    UI_ELEMENTS
} from "./view.js";
import {
    tabsButtonsListener
} from "./tabs.js";
import {
    UI_DETAILS
} from "./view.js";
import {
    UI_FORECAST
} from "./view.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const search = document.querySelector('.main__input');
const searchBtn = document.querySelector('.main__search');
const cityTab = document.querySelector('.main__city');
const favoriteCity = document.querySelector('.main__btn-heart');
const listFavoriteCity = document.querySelector('.main__list');
const tempMain = document.querySelector('.main__temperature');
const mainIcon = document.querySelector('.icon');


searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
    const cityName = search.value;
    getResponse(cityName);
    search.value = '';
});

tabsButtonsListener(UI_ELEMENTS.TABS.SECTIONS_BUTTONS);

function getResponse(cityName) {
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    let promise = fetch(url);
    getPromise(promise);
}

async function getPromise(promise) {
    await promise.then(
        function (result) {
            console.log(result);
            return result.json();
        }
    ).then(
        function (result) {
            console.log(result);
            return result;
        }
    ).then(
        function getResultNow(result) {
            mainIcon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
            tempMain.innerHTML = Math.round(result.main.temp);
            cityTab.innerHTML = result.name;

            favoriteCity.addEventListener('click', function () {
                let li = document.createElement('li');
                li.className = ('main-list__item');
                li.innerHTML = `${result.name}
             <button class="main-list__button"> ✘ </button>`;
                listFavoriteCity.append(li);

                const removeCity = document.querySelector('.main-list__button');

                removeCity.addEventListener('click', function () {
                    li.remove();
                });


                li.addEventListener('click', function () {
                    mainIcon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
                    tempMain.innerHTML = result.main.temp;
                    cityTab.innerHTML = result.name;
                });
            });
            localStorage.setItem('item', 1)
            console.log(localStorage.getItem('item'))
            getDetails(result)
            getForecast(result)
        }
    ).catch(alert);
};


function getDetails(result) {
    UI_DETAILS.CITY.innerHTML = `${result.name}`;
    UI_DETAILS.TEMP.innerHTML = Math.round(`${result.main.temp}`);
    UI_DETAILS.FEELS.innerHTML = Math.round(`${result.main.feels_like}`);
    UI_DETAILS.WEATHER.innerHTML = `${result.weather[0].main}`;
    UI_DETAILS.SUNRISE.innerHTML = `${result.sys.sunrise}`;
    UI_DETAILS.SUNSET.innerHTML = `${result.sys.sunset}`;
};

function getForecast(result) {
    UI_FORECAST.CITY.innerHTML = `${result.name}`;
};

const favoriteCities = localStorage.setItem('getDetails', getDetails.toString());
console.log(localStorage.getItem('getDetails'))

const myName = 'viki';
localStorage.setItem('name', myName);
console.log(localStorage.getItem('name'));


