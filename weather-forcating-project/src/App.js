import Weather from "./components/Weather";
import "./App.css";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  useEffect(() => {
    //Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);
  // console.log(weather);
  return (
    <div className="App">
      {weather && <Weather/>}
    </div>
  );
}

export default App;
