// Form.tsx

import { useState } from "react";

const Form = () => {
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
    <form>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />
      {city}

      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
};

export default Form;
