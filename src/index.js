
function handleserachSubmit(event){
    event.preventDefault();
    let searchinput =document.querySelector("#form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchinput.value;

}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit",handleserachSubmit);