import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App: React.FC = () => {
  // apiの型
  interface WeatherData {
    name: string;
    weather: { icon: string }[];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
  }

  // 天気情報
  const [cityName, setCityName] = useState<string>(""); //都市名
  const [weather, setWeather] = useState<string>(""); //天気
  const [temp, setTemp] = useState<number>(); //平均気温
  const [tempMin, setTempMin] = useState<number>(); //最低気温
  const [tempMax, setTempMax] = useState<number>(); //最高気温
  const [humidity, setHumidity] = useState<number>(); //湿度

  // 天気情報を取得
  useEffect(() => {
    axios
      .get<WeatherData>(
        "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=439b5d4b97c24212df08275c993f9d27&lang=ja&units=metric"
      )
      .then((res) => {
        console.log(res.data);
        setCityName(res.data.name);
        setWeather(res.data.weather[0].icon);
        setTemp(res.data.main.temp);
        setTempMin(res.data.main.temp_min);
        setTempMax(res.data.main.temp_max);
        setHumidity(res.data.main.humidity);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">天気予報サイト</header>
        <h1 className="weather-region">{cityName}</h1>
        <div className="weather-card">
          <div className="weather-card_info">
            <h2 className="weather-card_weather">天気</h2>
            <img
              src={`http://openweathermap.org/img/w/${weather}.png`}
              alt="#"
            />
            <h2 className="weather-card_temp">平均気温</h2>
            <p>{temp}℃</p>
            <div className="weather-card_tempMaxMin">
              <div className="weather-card_tempMin">
                <h4>最低気温</h4>
                <p>{tempMin}℃</p>
              </div>
              <div className="weather-card_tempMax">
                <h4>最高気温</h4>
                <p>{tempMax}℃</p>
              </div>
            </div>
            <h2 className="weather-card_humidity">湿度</h2>
            <p>{humidity}%</p>
          </div>
        </div>
        <div className="buttons">
          <button className="button">次へ</button>
          <button className="button">前へ</button>
        </div>
      </div>
    </>
  );
};

export default App;
