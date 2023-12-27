import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import About from './pages/about/about'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
