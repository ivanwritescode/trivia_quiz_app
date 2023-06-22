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

export interface IQuestionsAction {
    type: "UPDATE_QUESTIONS";
    questions: IQuestion[];
}

export interface IUpdateUserAnswerAction {
    type: "UPDATE_USER_ANSWERS";
    answer: IUserAnswer;
}

export interface IResetUserAnswerAction { type: "RESET_USER_ANSWERS"; }

export interface IUpdateScoreAction {
    type: "UPDATE_USER_SCORE";
    score: number;
}

export interface IResetScoreAction {
    type: "RESET_USER_SCORE";
}

export interface IUpdateCurrentIndexAction {
    type: "UPDATE_CURRENT_QUESTION_INDEX";
}

export interface IResetCurrentIndexAction {
    type: "RESET_CURRENT_QUESTION_INDEX";
}