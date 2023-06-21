import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import QuizPage from './pages/Quiz'
import FinalResultsPage from './pages/Results'

import './styles/reset.scss'
import './styles/main.scss'
import './styles/app.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage />} path="/quiz" />
          <Route element={<FinalResultsPage />} path="/finalresults" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
