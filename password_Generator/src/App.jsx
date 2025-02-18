import { useState } from 'react';
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback( ()=> {
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_{|}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);
      pass  += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number, character, setPassword])
  
  useEffect(() => {
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  const copyContent = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <h1 className="text-3xl text-white text-center  p-3 mt-3">
        {" "}
        Good Morning Suyog Wake up with new beginning{" "}
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 mb-2  "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyContent}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400 cursor-pointer">
            copy
          </button>
        </div>
        <div className="flex text-sm  gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length :{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
