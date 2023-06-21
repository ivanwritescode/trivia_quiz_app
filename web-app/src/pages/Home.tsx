import React from 'react'
import logo from '../images/zeniark-logo.png'
import Card from '../UI/Card'
import PageControl from '../components/PageControl'

export default function HomePage() {
  return (
    <main>
      <Card className="page page-home">
        <div className="home-logo">
          <img src={logo} alt="zeniark logo" />
        </div>
        <div className="home-title">
          <h1>Welcome to the Trivia Challenge!</h1>
        </div>
        <div className="home-body">
          <p className="quiz-info-text">You will be presented with 10 True or False questions.</p>
          <p className="challenge-text">Can you score 10/10?</p>
        </div>
        <PageControl content="LET'S START!" />
      </Card>
    </main>
  )
}
