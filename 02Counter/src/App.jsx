import { useState } from "react";
import "./App.css";

function App() {
  // useState(default_value) hook:  it's responsible for changing the state, it can propagate the change in ui(in dom)
  // it will return 2 values first is value and second is callback function to update that valu
  // let counter = 5;
  let [counter, setCounter] = useState(5);
  let [message, setMessage] = useState("");

  const updateMessage = () => {
    message = "Value is between 0-100 only.";
    setMessage(message);
  }
  const increaseValue = () => {
    counter++;
    if(counter > 100){
      counter = 100;
      updateMessage();
    }else{
      setMessage("");
    }
    setCounter(counter);
    // console.log("Conter increase:", counter);
  };
  const decreaseValue = () => {
    counter--;
    if(counter < 0){
      counter = 0;
      updateMessage();
    }else{
      setMessage("");
    }
    setCounter(counter); 
    // console.log("Conter decrease:", counter);
  };
  return (
    <>
      <h1>Counter with vite</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      <p>{message}</p>
    </>
  );
}

export default App;
