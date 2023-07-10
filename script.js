const apiKey = "3d4a442ff5d7d850392dbfe1253c1b45";
const btnSearch = document.querySelector("#btn-search");
const cityInput = document.querySelector("#city-input");
const iconWeather = document.querySelector("#icon-weather");

async function checkWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput.value}&APPID=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".no-info").style.display = "block";
        document.querySelector(".info").style.display = "none";
    }else{
        var data = await response.json();
        document.querySelector("#temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector("#location").innerHTML = data.name;
        document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
        document.querySelector("#wind").innerHTML = Math.round(data.wind.speed) + "km/h";
        if(data.weather[0].main == "Clouds"){
            iconWeather.src = "img/5903939.png"
        }else if(data.weather[0].main == "Rain"){
            iconWeather.src = "img/rain.png";
        }else if(data.weather[0].main == "Clear"){
            iconWeather.src = "img/sunny.png";
        }else if(data.weather[0].main == "Mist"){
            iconWeather.weather[0].main == "hazzy.png";
        }
        document.querySelector(".info").style.display = "flex";
        document.querySelector(".no-info").style.display = "none";
    }
    
}

btnSearch.addEventListener("click", () =>{
    checkWeather();
    cityInput.value = "";
})