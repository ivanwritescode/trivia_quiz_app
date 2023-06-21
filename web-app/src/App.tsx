import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import QuizPage from './pages/Quiz'
import FinalResultsPage from './pages/Results'

import { selectRandomQuestions } from './util/helpers'
import { questions } from './util/questions'
import { IQuestion } from './util/interfaces'

import './styles/reset.scss'
import './styles/main.scss'
import './styles/app.scss'

const maxQuestions = 10;
const initialQuestionsState = [{
  category: "",
  type: "",
  difficulty: "",
  question: "",
  correct_answer: "",
  incorrect_answers: [""],
}]

function App() {
  const [randomQuestions, setRandomQuestions] = useState<IQuestion[]>(initialQuestionsState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevState) => prevState + 1)
  };

  useEffect(() => {
    setRandomQuestions(() => selectRandomQuestions(questions.results, 10))
  }, []);

  useEffect(() => {
    console.log(currentIndex, randomQuestions);
  }, [currentIndex, randomQuestions]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={
            <QuizPage
              currentPosition={currentIndex + 1}
              questionsCount={maxQuestions}
              question={randomQuestions[currentIndex]}
              handleClick={handleClick} />}
            path="/quiz" />
          <Route element={<FinalResultsPage />} path="/finalresults" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
