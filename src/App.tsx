import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">天気予報サイト</header>
      <div className="weather-card">
        <h2 className="weather-card_region">地名</h2>
        <h2 className="weather-card_weather">天気</h2>
      </div>
      <div className="buttons">
        <button className="button">次へ</button>
        <button className="button">前へ</button>
      </div>
    </div>
  );
}

export default App;
