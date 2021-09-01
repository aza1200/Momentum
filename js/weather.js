const API_KEY = "cc3bc73c16ca59a403f40c343c7eb6b0";

function onGeoSuccess(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
        console.log(data.name,data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const kpop = import("/js/kpop");
        city.innerText = kpop.hangulify(data.name);
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })
    ); // url fetch 하고 그 다음으로 response 받아야 함.
}

function onGeoError(){
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);

