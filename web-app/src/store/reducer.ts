import { IState } from "../util/interfaces";
import { AppAction } from "../util/types";

function reducer(state: IState, action: AppAction): IState {
    let updatedState: IState = { ...state };
    switch (action.type) {
        case "UPDATE_QUESTIONS":
            updatedState = {
                ...state,
                questions: action.questions
            }
            break;

        case "UPDATE_USER_ANSWERS":
            updatedState = {
                ...state,
                answers: [...state.answers, action.answer]
            }
            break;

        case "RESET_USER_ANSWERS":
            updatedState = {
                ...state,
                answers: []
            }
            break;

        case "UPDATE_USER_SCORE":
            updatedState = {
                ...state,
                score: action.score
            }
            break;

        case "UPDATE_CURRENT_QUESTION_INDEX":
            updatedState = {
                ...state,
                currentIndex: state.currentIndex + 1
            }
            break;

        case "RESET_CURRENT_QUESTION_INDEX":
            updatedState = {
                ...state,
                currentIndex: 0
            }
            break;

        default:
            throw new Error("Unknown action type");
    }

    return updatedState;
}

export default reducer;