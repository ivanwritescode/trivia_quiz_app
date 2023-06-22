import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import QuizPage from './pages/Quiz'
import FinalResultsPage from './pages/Results'

import { selectRandomQuestions } from './util/helpers'
import { questions } from './util/questions'
import { initialState, maxQuestions } from './util/constants'
import reducer from './store/reducers/reducer'
import {
  resetCurrentQuestionIndex,
  resetUserAnswers,
  resetUserScore,
  updateCurrentQuestionIndex,
  updateQuestions,
  updateUserAnswers,
  updateUserScore
} from './store/actions/actions'

import './styles/reset.scss'
import './styles/main.scss'
import './styles/app.scss'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = (value: string) => {
    dispatch(updateUserAnswers({ questionIndex: state.currentIndex, value: value }));

    let currentCorrectAnswer = state.questions[state.currentIndex].correct_answer;
    if (value === currentCorrectAnswer)
      dispatch(updateUserScore(state.score + 1));

    dispatch(updateCurrentQuestionIndex())
  };

  const handleResultsClick = () => {
    dispatch(resetCurrentQuestionIndex());
    dispatch(resetUserAnswers())
    dispatch(resetUserScore())
    dispatch(updateQuestions(selectRandomQuestions(questions.results, maxQuestions)))
  };

  useEffect(() => {
    dispatch(updateQuestions(selectRandomQuestions(questions.results, maxQuestions)))
  }, []);

  useEffect(() => {
    console.log(state.currentIndex, state.questions);
  }, [state.currentIndex, state.questions]);

  useEffect(() => {
    console.log("SCORE: ", state.score);
  }, [state.score])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={
            <QuizPage
              currentPosition={state.currentIndex + 1}
              questionsCount={maxQuestions}
              question={state.questions[state.currentIndex]}
              handleClick={handleClick} />}
            path="/quiz" />
          <Route element={
            <FinalResultsPage
              questions={state.questions}
              answers={state.answers}
              score={state.score}
              onClick={handleResultsClick} />}
            path="/finalresults" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
