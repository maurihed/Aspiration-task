
import { TopicAction } from "../enums";
import { IState, ITopic, TopicActionType } from "../interfaces";

export const TopicReducer = (state: IState, action: TopicActionType) => {
    let topics: ITopic[] = [];

    switch(action.type) {
        case TopicAction.FETCH_TOPICS:
            return {...state, loading: true };
        case TopicAction.FETCH_SUCCESS:
            topics = action.payload as ITopic[];
            return {...state, loading: false, topics, error: '' };
        case TopicAction.FETCH_ERROR:
            return {...state, loading: false, topics, error: action.payload };
        default:
            return state;
    }
};
