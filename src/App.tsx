import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // 天気情報
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  // const [humidity, setHumidity] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=439b5d4b97c24212df08275c993f9d27&lang=ja&units=metric"
      )
      .then((res) => {
        // console.log(res.data);
        setCityName(res.data.name);
        setWeather(res.data.weather[0].description);
        setTemp(res.data.main.temp);
        setTempMin(res.data.main.temp_min);
        setTempMax(res.data.main.temp_max);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">天気予報サイト</header>
      <div className="weather-card">
        <h2 className="weather-card_region">地名</h2>
        <h3>{cityName}</h3>
        <h2 className="weather-card_weather">天気</h2>
        <h3>{weather}</h3>
        <h2 className="weather-card_weather">平均気温</h2>
        <h3>{temp}</h3>
        <h2 className="weather-card_weather">最低気温</h2>
        <h3>{tempMin}</h3>
        <h2 className="weather-card_weather">最高気温</h2>
        <h3>{tempMax}</h3>
        {/* <h2 className="weather-card_weather">湿度</h2>
        <h3>papa</h3> */}
      </div>
      <div className="buttons">
        <button className="button">次へ</button>
        <button className="button">前へ</button>
      </div>
    </div>
  );
}

export default App;
