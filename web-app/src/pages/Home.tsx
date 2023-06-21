import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/zeniark-logo.png'

export default function HomePage() {
  return (
    <main className="page page-home">

      <div className="site-logo">
        <img src={logo} alt="zeniark logo" />
      </div>
      <div className="page-title">
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p className="info">You will be presented with 10 True or False questions.</p>
        <p className="question">Can you score 10/10?</p>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz">LET’S START!</Link>
        </button>
      </div>


    </main>
  )
}
