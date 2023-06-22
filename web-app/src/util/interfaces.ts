export interface IQuestion {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface IUserAnswer {
    questionIndex: number;
    value: string;
}

export interface IState {
    questions: IQuestion[];
    answers: IUserAnswer[];
    score: number;
    currentIndex: number;
}