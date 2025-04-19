import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-900 flex justify-center items-center'>
      <h1 className='text-4xl font-bold text-teal-400'>
        Portfolio Robmar Definitivo
      </h1>
    </div>
  )
}

export default App
