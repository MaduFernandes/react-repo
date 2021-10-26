import React from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'

import './css/App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-nav">
        <Navbar />
      </header>
      <Home />
    </div>
  )
}

export default App
