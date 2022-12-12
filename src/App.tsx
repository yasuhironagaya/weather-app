// App.tsx

import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";



function App() {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=c2fbbeb20a584e528b071710221112&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="test">

      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
