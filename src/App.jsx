import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col bg-gray-900'>
      <Navbar />
      <main className='flex-grow'>
        <Home />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
