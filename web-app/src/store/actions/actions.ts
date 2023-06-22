import { IQuestion, IUserAnswer } from "../../util/interfaces";
import {
    Action,
    ActionWithData,
    RESET_CURRENT_QUESTION_INDEX,
    RESET_USER_ANSWERS,
    RESET_USER_SCORE,
    UPDATE_CURRENT_QUESTION_INDEX,
    UPDATE_QUESTIONS,
    UPDATE_USER_ANSWERS,
    UPDATE_USER_SCORE
} from "./actionTypes";

export const updateQuestions = (data: IQuestion[]): ActionWithData<IQuestion[]> => ({
    type: UPDATE_QUESTIONS,
    payload: data
})

export const updateUserAnswers = (data: IUserAnswer): ActionWithData<IUserAnswer> => ({
    type: UPDATE_USER_ANSWERS,
    payload: data,
})

export const resetUserAnswers = (): Action => ({
    type: RESET_USER_ANSWERS,
})

export const updateUserScore = (data: number): ActionWithData<number> => ({
    type: UPDATE_USER_SCORE,
    payload: data,
})

export const resetUserScore = (): Action => ({
    type: RESET_USER_SCORE,
})

export const updateCurrentQuestionIndex = (): Action => ({
    type: UPDATE_CURRENT_QUESTION_INDEX,
})

export const resetCurrentQuestionIndex = (): Action => ({
    type: RESET_CURRENT_QUESTION_INDEX,
})