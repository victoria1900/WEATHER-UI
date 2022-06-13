export const UI_ELEMENTS = {
    INPUT: document.querySelector(".main__input"),
    SEARCH_BTN: document.querySelector(".main__search "),
    FAVORITE_LIST: document.querySelector(".main__list"),
    FAVORITE_CITIES: document.querySelectorAll(".main__btn"),
    FAVORITE_BUTTON: document.querySelector(".main__btn-heart"),

    TABS: {
        SECTIONS: document.querySelectorAll(".main__info"),
        SECTIONS_BUTTONS: document.querySelectorAll(".main__tab"),

        NOW: {
            TEMPERATURE: document.querySelector(".main__temperature"),
            CITY: document.querySelector(".main__city"),
            WEATHER_ICON: document.querySelector(".icon"),
        },
        DETAILS: {
            CITY: document.querySelector("#details_city"),
            TEMPERATURE: document.querySelector("#details_temp"),
            FEELS_LIKE: document.querySelector("#details_feels"),
            WEATHER: document.querySelector("#details_weather"),
            SUNRISE: document.querySelector("#sunrise"),
            SUNSET: document.querySelector("#sunset"),
        },
        FORECAST: {
            ITEMS: document.querySelector(".forecast__list"),
            CITY: document.querySelector(".main__info-city--tab-3"),
            TEMPERATURE: document.querySelector("#forecastTemp"),
            FEELS_LIKE: document.querySelector("#forecastTempFeels"),
            WEATHER_ICON: document.querySelector(".card-weather__box"),
        },
    },
};

export const UI_DETAILS = {
    CITY: document.querySelector('#details_city'),
    TEMP: document.querySelector('#details_temp'),
    FEELS: document.querySelector('#details_feels'),
    WEATHER: document.querySelector('#details_weather'),
    SUNRISE: document.querySelector('#sunrise'),
    SUNSET: document.querySelector('#sunset'),
};

export const UI_FORECAST = {
    CITY: document.querySelector('.main__info-city--tab-3'),
    DATE: document.querySelector('.card-weather__date'),
}