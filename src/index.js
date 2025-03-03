function refreshWeather(response) {

    console/console.log(response);
    
    
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    let description = response.data.condition.description;
    let descriptionElement= document.querySelector("#description");
    descriptionElement.innerHTML =description ;
    let humidity = `${response.data.temperature.humidity}%`;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML=humidity;

    let wind = `${response.data.wind.speed} Km/h`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=wind;

    let date = new Date();
    let timeElement = document.querySelector("#date");
    timeElement.innerHTML= formatDate(date);

}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {

    let apiKey = "3b7851dt9259335e4ao904abf21d0f0b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    
    axios.get(apiUrl).then(refreshWeather);
}




function handleserachSubmit(event){
    event.preventDefault();
    let searchinput =document.querySelector("#form-input");
    
    searchCity (searchinput.value);

}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit",handleserachSubmit);

searchCity("Khartoum");