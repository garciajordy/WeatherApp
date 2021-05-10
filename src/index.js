const getData = (city) => {
  const data = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9ce157141208c7f7d8b28e7e79719ed2&units=metric`).then((res) => res.json());
  return data;
};

function weather() {
  const city = document.getElementById('city').value;
  getData(city).then((data) => {
    const temp = document.getElementById('temp');
    const minTemp1 = document.getElementById('min-temp');
    const maxTemp = document.getElementById('max-temp');
    const city1 = document.getElementById('city-1');
    const weatherCast = document.getElementById('weather-cast');
    city1.innerHTML = data.name;
    weatherCast.innerHTML = data.weather[0].description;
    temp.innerHTML = `Temp = ${data.main.temp} Celsius`;
    minTemp1.innerHTML = `Min-temp = ${data.main.temp_min} Celsius`;
    maxTemp.innerHTML = `Max-temp = ${data.main.temp_max} Celsius`;
  });
}

const btn = document.getElementById('btn');
btn.addEventListener('click', weather);
