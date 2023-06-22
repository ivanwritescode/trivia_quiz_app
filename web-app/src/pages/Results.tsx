import React, { useEffect } from "react";
import logo from '../images/logo.png'
import Card from "../UI/Card";
import CardHeader from "../UI/CardHeader";
import CardBody from "../UI/CardBody";
import { FailedIcon, SuccessIcon } from "../components/Icons";
import he from 'he';
import CardFooter from "../UI/CardFooter";
import PageControl from "../components/PageControl";
import { IQuestion, IUserAnswer } from "../util/interfaces";
import { useNavigate } from "react-router-dom";

interface IFinalResultsPageProps {
    questions: IQuestion[];
    answers: IUserAnswer[];
    score: number;
    onClick: () => void;
}

const getAnswerText = (answer: string) => {
    if(answer === "True")
        return <span className="highlight-correct">{answer}</span>
    else if (answer === "False")
        return <span className="highlight-wrong">{answer}</span>
    else
        return answer;
};

const FinalResultsPage = ({ questions, answers, score, onClick }: IFinalResultsPageProps) => {
    const navigate = useNavigate();

    const getIsCorrect = (index: number) => {
        if (answers.length === 0)
            return;
        return questions[index].correct_answer === answers[index].value;
    }

    useEffect(() => {
        if(answers.length === 0)
            navigate("/quiz")
    });
    
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
                    <ol>
                        {questions.map((item, i) =>
                            <li key={i}>
                                <div className="list-item-wrapper">
                                    <div className="list-group-text">
                                        <p className="question">{he.decode(item.question)}</p>
                                        <p className="annotation">The correct answer is <b>{getAnswerText(item.correct_answer)}</b>. You answered {answers.length > 0 && getAnswerText(answers[i].value)}</p>
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
                    <PageControl linkTo="../quiz" content="PLAY AGAIN" onClick={onClick} />
                </CardFooter>
            </Card>
        </main>
    )
}

export default FinalResultsPage;
