import React, { useEffect, useState } from "react";
import "./App.css";
// import MyComponent from "./Components/MyComponent";
import Timer from "./Components/Timer";

function App() {
  // const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("App is Mountaining");
  }, []);
  return (
    <div className="App">
      {/* {isVisible ? <MyComponent /> : <></>}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button> */}
      <Timer />
    </div>
  );
}

export default App;
