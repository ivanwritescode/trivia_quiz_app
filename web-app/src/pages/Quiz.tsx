import React from 'react';
import logo from '../images/logo.png'
import Card from '../UI/Card';
import CardHeader from '../UI/CardHeader';
import CardBody from '../UI/CardBody';
import CardFooter from '../UI/CardFooter';
import CardControl from '../UI/CardControl';

const QuizPage = () => {
    return (
        <main>
            <Card className="page page-quiz">
                <CardHeader className="quiz-title">
                    <div>
                        <img src={logo} className='logo' alt="zeniark logo" />
                        <h1 className="title-text">Category: Geography</h1>
                    </div>
                    <p className="progress-text"><span>1 of 10</span></p>
                </CardHeader>
                <CardBody className="quiz-body">
                    <p className='question'>The French Kingdom helped the United States gain their independence over Great Britain during the Revolutionary War.</p>
                </CardBody>
                <CardFooter>
                    <CardControl isCentered />
                </CardFooter>
            </Card>
        </main>
    )
}

export default QuizPage;
