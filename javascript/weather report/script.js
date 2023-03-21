 let data;
const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temp = document.getElementById("temp");
const logo = document.getElementById("logo");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) =>{
    event.preventDefault();
    if(!inputBox.value){
        alert('please enter the city name');
    }
    // to get the value
    const city = inputBox.value;
    // fetch
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=e0e1af2c348f4b65b0b61107230103&q=${city}`);

    const  orgData = await fetchData.json();
    data = orgData;

    console.log(data);
    // displaying data in html
    countryName.innerHTML = data.location.country;
    cityName.innerHTML = data.location.name;
    stateName.innerHTML = data.location.region;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temp.innerHTML = data.current.temp_c;
    weatherStatus.innerHTML = data.current.condition.text;
    logo.src = data.current.condition.icon;

}

