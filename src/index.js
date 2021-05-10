import "../style/style.scss"

const getData = function(city) {
    let data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9ce157141208c7f7d8b28e7e79719ed2&units=metric`).then(function (res) {
        return res.json()
    })
    return data
}
function weather() {
    let city = document.getElementById("city").value
    getData(city).then(function (data) {
        let temp = document.getElementById("temp");
        let minTemp = document.getElementById("min-temp");
        let maxTemp = document.getElementById("max-temp");
        let city = document.getElementById("city-1");
        let weatherCast = document.getElementById("weather-cast");
        city.innerHTML = data.name
        weatherCast.innerHTML = data.weather[0].description
        temp.innerHTML = `Temp = ${data.main.temp} Celsius`
        minTemp.innerHTML = `Min-temp = ${data.main.temp_min} Celsius`
        maxTemp.innerHTML = `Max-temp = ${data.main.temp_max} Celsius`
        console.log(data.main)
    })
}
document.getElementById("btn").addEventListener("click",weather)
