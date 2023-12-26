import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header'
import HomeHero from './components/HomeHero/HomeHero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <HomeHero />


    </>
  )
}

export default App
