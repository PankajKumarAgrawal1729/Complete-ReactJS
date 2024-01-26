import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("My Component is mounting...");
    return function () {
      console.log("Unmounting...");
    };
  }, []);

  //it'll call when state is Changed
  useEffect(() => {
    console.log("Count is updated");
    return function () {
      console.log("Returning Count...", count1, count2);
    };
  }, [count1, count2]);

  return (
    <div>
      <p>Count1 is {count1}</p>
      <p>Count2 is {count2}</p>
      <button onClick={() => setCount1(count1 + 1)}>Update Count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Update Count2</button>
    </div>
  );
};

export default MyComponent;
