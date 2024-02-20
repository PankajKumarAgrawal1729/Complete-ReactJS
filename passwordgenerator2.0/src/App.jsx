import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharactersAllowed, setSpecialCharactersAllowed] =
    useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback is used for memorization, here it can optimise the method(here passwordGenerator) on the basis of these dependencies(if they changed and this method is run)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharactersAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharactersAllowed, setPassword]); // dependency

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [length, password])

  // here if anything change in these dependencies then we call the method(passwordGenerator)
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, specialCharactersAllowed, passwordGenerator]); // dependency

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-500 bg-gray-800">
      <h1 className="text-2xl text-center text-white my-4">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>
          copy
        </button>
      </div>
      <div className="flex items-center justify-center text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            className="cursor-pointer"
            onChange={(ev) => {
              {
                setLength(ev.target.value);
              }
            }}
          />
          <label>Length: ({length})</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultChecked={specialCharactersAllowed}
            id="specialcharsInput"
            onChange={() => {
              setSpecialCharactersAllowed((prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
