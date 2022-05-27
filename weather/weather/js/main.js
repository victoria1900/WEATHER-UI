const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';


const search = document.querySelector('.main__input');
const searchBtn = document.querySelector('.main__search');
const cityTab = document.querySelector('.main__city');
const favoriteCity = document.querySelector('.main__btn-heart');
const listFavoriteCity = document.querySelector('.main__list');
const tempMain = document.querySelector('.main__temperature');
const mainIcon = document.querySelector('.icon');

// const mainTab = document.querySelector('.main__tab');

// mainTab.addEventListener('click', function(){
//     mainTab.classList.add('.main__tab--active');

// });

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const cityName = search.value;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    search.value = '';

    let promise = fetch(url);

    promise.then(
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
        function (result) {
            mainIcon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
            tempMain.innerHTML = result.main.temp;
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

        }
    ).catch(alert);

});