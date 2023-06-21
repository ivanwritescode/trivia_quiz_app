import React from "react";
import logo from '../images/logo.png'
import Card from "../UI/Card";
import CardHeader from "../UI/CardHeader";
import CardBody from "../UI/CardBody";
import { FailedIcon, SuccessIcon } from "../components/Icons";
import he from 'he';
import CardFooter from "../UI/CardFooter";
import PageControl from "../components/PageControl";
import { IQuestion, IUserAnswer } from "../util/interfaces";

interface IFinalResultsPageProps {
    questions: IQuestion[];
    answers: IUserAnswer[];
    score: number;
}

const FinalResultsPage = ({ questions, answers, score }: IFinalResultsPageProps) => {
    const getIsCorrect = (index: number) =>
        questions[index].correct_answer === answers[index].value;
    
    return (
        <main>
            <Card className="page page-results">
                <CardHeader className="results-title">
                    <img src={logo} className='logo' alt="zeniark logo" />
                    <h1 className="title-text">Final Results</h1>
                </CardHeader>
                <CardBody>
                    <div className="user-score">
                        <h2>{score}/{questions.length}</h2>
                        <p>your score</p>
                    </div>
                    <ol role="list">
                        {questions.map((item, i) =>
                            <li role="listitem" key={i}>
                                <div className="list-item-wrapper">
                                    <div className="list-group-text">
                                        <p className="question">{he.decode(item.question)}</p>
                                        <p className="annotation">The correct answer is <em className="highlight-correct">{item.correct_answer}</em>. You answered <em className="highlight-wrong">{item.incorrect_answers}</em></p>
                                    </div>
                                    <div className="list-group-icon">
                                        {getIsCorrect(i) ? <SuccessIcon /> : <FailedIcon />} 
                                    </div>
                                </div>
                            </li>
                        )}
                    </ol>
                </CardBody>
                <CardFooter>
                    <PageControl linkTo="../quiz" content="PLAY AGAIN" />
                </CardFooter>
            </Card>
        </main>
    )
}

export default FinalResultsPage;
