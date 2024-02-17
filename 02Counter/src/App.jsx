import { useState } from "react";
import "./App.css";

function App() {
  // useState(default_value) hook:  it's responsible for changing the state, it can propagate the change in ui(in dom)
  // it will return 2 values first is value and second is callback function to update that valu
  // let counter = 5;
  let [counter, setCounter] = useState(0);
  let [message, setMessage] = useState("");

  const updateMessage = () => {
    message = "Value is between 0-100 only.";
    setMessage(message);
  };
  const increaseValue = () => {
    if (counter == 100) {
      counter = 99;
      updateMessage();
    } else {
      setMessage("");
    }
    // here value is updated only once, becoz useState(or in react itself) task are done in a batch and becoz we increase counter variable  4 time react consider it as a duplicate task so, it consider all as one task
    setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    
    /* 
    for doing this now value increase by 4
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);
    setCounter((preCounter) => preCounter + 1);

    */
    // console.log("Conter increase:", counter);
  };
  const decreaseValue = () => {
    if (counter < 1) {
      counter = 1;
      updateMessage();
    } else {
      setMessage("");
    }
    setCounter(counter - 1);
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
