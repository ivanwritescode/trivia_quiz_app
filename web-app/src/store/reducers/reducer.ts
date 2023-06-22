import { IQuestion, IState, IUserAnswer } from "../../util/interfaces";
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
} from "../actions/actionTypes";

function reducer(state: IState, action: Action | ActionWithData<any>): IState {
    let updatedState: IState = { ...state };
    switch (action.type) {
        case UPDATE_QUESTIONS:
            const updateQuestionsAction = action as ActionWithData<IQuestion[]>;
            updatedState = {
                ...state,
                questions: updateQuestionsAction.payload 
            }
            break;

        case UPDATE_USER_ANSWERS:
            const updateUserAnswers = action as ActionWithData<IUserAnswer>;
            updatedState = {
                ...state,
                answers: [...state.answers, updateUserAnswers.payload]
            }
            break;

        case RESET_USER_ANSWERS:
            updatedState = {
                ...state,
                answers: []
            }
            break;

        case UPDATE_USER_SCORE:
            const updateUserScore = action as ActionWithData<number>;
            updatedState = {
                ...state,
                score: updateUserScore.payload
            }
            break;

        case RESET_USER_SCORE:
            updatedState = {
                ...state,
                score: 0
            }
            break;

        case UPDATE_CURRENT_QUESTION_INDEX:
            updatedState = {
                ...state,
                currentIndex: state.currentIndex + 1
            }
            break;

        case RESET_CURRENT_QUESTION_INDEX:
            updatedState = {
                ...state,
                currentIndex: 0
            }
            break;

        default:
            throw new Error("Unknown action type. Please check if dispatched actions are registered to reducer.");
    }

    return updatedState;
}

export default reducer;