import Button from "./component/button";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  function bgChange(ev) {
    setColor(ev.currentTarget.innerText);
  }
  return (
    <div
      className="w-full h-screen duration-200"
      id="main-container"
      style={{ backgroundColor: color }}
    >
      <div className="btn-container fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button name="Red" textColor="white" callback={bgChange}/>
          <Button name="Purple" textColor="white" callback={bgChange}/>
          <Button name="Green" textColor="white" callback={bgChange}/>
          <Button name="Blue" textColor="white" callback={bgChange}/>
          <Button name="Olive" textColor="white" callback={bgChange}/>
          <Button name="Gray" textColor="white"callback={bgChange} />
          <Button name="Yellow" textColor="black" callback={bgChange}/>
          <Button name="Pink" textColor="black" callback={bgChange}/>
          <Button name="Lavender" textColor="black" callback={bgChange}/>
          <Button name="White" textColor="black" callback={bgChange}/>
          <Button name="Black" textColor="white" callback={bgChange}/>
        </div>
      </div>
    </div>
  );
}

export default App;
