import {
    IResetCurrentIndexAction,
    IQuestionsAction,
    IUpdateScoreAction,
    IResetScoreAction,
    IResetUserAnswerAction,
    IUpdateUserAnswerAction,
    IUpdateCurrentIndexAction,
} from "./interfaces";

export type AppAction = IQuestionsAction
    | IResetUserAnswerAction
    | IUpdateUserAnswerAction
    | IUpdateScoreAction
    | IResetScoreAction
    | IUpdateCurrentIndexAction
    | IResetCurrentIndexAction