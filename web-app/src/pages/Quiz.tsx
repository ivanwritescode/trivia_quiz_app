import React from 'react';
import logo from '../images/logo.png'
import Card from '../UI/Card';
import CardHeader from '../UI/CardHeader';
import CardBody from '../UI/CardBody';
import CardFooter from '../UI/CardFooter';
import CardControl from '../UI/CardControl';
import { IQuestion } from '../util/interfaces';
import he from 'he';

interface IQuizPageProp {
    currentPosition: number;
    questionsCount: number;
    question: IQuestion;
    handleClick: (value: string) => void;
}

const QuizPage = ({
    currentPosition,
    questionsCount,
    question,
    handleClick,
}: IQuizPageProp) => {
    return (
        <main>
            <Card className="page page-quiz">
                <CardHeader className="quiz-title">
                    <div>
                        <img src={logo} className='logo' alt="zeniark logo" />
                        <h1 className="title-text">Category: {question.category}</h1>
                    </div>
                    <p className="progress-text"><span>{currentPosition} of {questionsCount}</span></p>
                </CardHeader>
                <CardBody className="quiz-body">
                    <p className='question'>{he.decode(question.question)}</p>
                </CardBody>
                <CardFooter hasBorder>
                    <CardControl isCentered handleClick={handleClick} />
                </CardFooter>
            </Card>
        </main>
    )
}

export default QuizPage;
