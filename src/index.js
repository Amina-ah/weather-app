function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML=Math.round(temperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

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