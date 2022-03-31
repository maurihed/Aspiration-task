
import { TopicAction } from "../enums";
import { IState, ITopic, TopicActionType } from "../interfaces";

export const TopicReducer = (state: IState, action: TopicActionType) => {
    let topic: ITopic|null = null;

    switch(action.type) {
        case TopicAction.FETCH_TOPICS:
            return {...state, loading: true };
        case TopicAction.FETCH_SUCCESS:
            topic = action.payload as ITopic;
            return {
                ...state,
                loading: false,
                topic,
                error: '',
            };
        case TopicAction.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                topic,
                error: action.payload
            };
        default:
            return state;
    }
};
