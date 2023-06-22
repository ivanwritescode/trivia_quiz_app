export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const UPDATE_USER_ANSWERS = "UDPATE_USER_ANSWERS";
export const RESET_USER_ANSWERS = "RESET_USER_ANSWERS";
export const UPDATE_USER_SCORE = "UPDATE_USER_SCORE";
export const RESET_USER_SCORE = "RESET_USER_SCORE";
export const UPDATE_CURRENT_QUESTION_INDEX = "UPDATE_CURRENT_QUESTION_INDEX";
export const RESET_CURRENT_QUESTION_INDEX = "RESET_CURRENT_QUESTION_INDEX";

export interface Action {
    type: string;
}

export interface ActionWithData<T> extends Action {
    type: string,
    payload: T;
}