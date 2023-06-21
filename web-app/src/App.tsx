import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'

import './styles/reset.scss'
import './styles/main.scss'
import './styles/app.scss'
import QuizPage from './pages/Quiz'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage />} path="/quiz" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
