import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import './styles/reset.scss'
import './styles/main.scss'
import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
