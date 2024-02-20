import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  function passwordGenerator() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialchars = "!@#$%^&*-_+=[]{}~`";

    const len = Number.parseInt(length);
    const isNumbersChecked = document.getElementById("numbers").checked;
    const isCharactersChecked = document.getElementById("characters").checked;
    if(isNumbersChecked){
      chars += numbers;
    }
    if(isCharactersChecked){
      chars += specialchars;
    }

    let pass = "";
    let index = chars.length;

    for(let i = 0; i < len; i++){
        pass += chars.charAt(Math.floor(Math.random() * index));
    }
    setPassword(pass);
  }

  window.onload = () => {
    passwordGenerator();
  }

  function copyToClipboard() {
    //for copying the content being passed to clipboard - for pasting it later and notifies the user
    let textArea = document.createElement('textarea');
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.background = "transparents";
    textArea.textContent = password;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}

  return (
    <div className='main-container flex-col gap-4 justify-center items-center mt-10 bg-[#c026d3] w-[400px] h-[100px]'>
      <div className='pass-container flex'>
        <p id='password' className='w-[300px] h-8 bg-white text-red-600 text-left pl-4 text-lg'>{password}</p>
        <button type="button" className='bg-[#1d4ed8] text-white w-14 h-8 rounded-r-lg' onClick={() => copyToClipboard()}>copy</button>
      </div>
      <div className='constraint-box flex gap-3'>
        <input type="range" name="" id="" value={length} min={8} max={24} onInput={(ev) => {
          setLength(ev.currentTarget.value);
          passwordGenerator();
        }}/>({length})
        <input type="checkbox" name="Numbers" id="numbers" onInput={() => passwordGenerator()}/>Numbers
        <input type="checkbox" name="Characters" id="characters" onInput={() => passwordGenerator()}/>Characters
      </div>
    </div>
  )
}

export default App
