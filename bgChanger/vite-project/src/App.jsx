import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function randomColor() {

  }
  function changeColor(color) {
    setColor(color)
  }
  return (

    <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
      <p className="text-xl font-semibold mt-4 text-white">
        Selected Color: <span className="font-bold">{color}</span>
      </p> <div className="flex flex-wrap justify-center space-x-2.5 shadow-lg bg-blue-400 px-3 py-2 rounded-b-3xl">
        <button onClick={() => { changeColor('red') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          Red
        </button>
        <button onClick={() => { changeColor('blue') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          Blue
        </button>
        <button onClick={() => { changeColor('green') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          Green
        </button>
        <button onClick={() => { changeColor('white') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          White
        </button>
        <button onClick={() => { changeColor('teal') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          Teal
        </button>
        <button onClick={() => { changeColor('teal') }} className="outline-none px-4 py-1 rounded-full text-white shadow-2xl bg-blue-600">
          Random
        </button>
      </div>
    </div>


  )
}

export default App
