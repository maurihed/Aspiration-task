import { ReactNode, useReducer, createContext, useCallback } from "react";
import { TopicAction } from "../enums";
import { IState, ITopicContext } from "../interfaces";
import { TopicReducer } from "../reducers/TopicReducer";
import * as TopicService from "../services/TopicService";

export const TopicContext = createContext<ITopicContext | null>(null);

const initialState: IState = {
    topic: null,
    loading: false,
    error: '',
};

const TopicProvider = ({children}:  {children: ReactNode}) => {
    const [state, dispatch] = useReducer(TopicReducer, initialState);
    
    const fetchTopics = useCallback(async (name: string) => {
        try {
            dispatch({ type: TopicAction.FETCH_TOPICS });
            const response: any = await TopicService.fetchTopics(name);
            dispatch({ type: TopicAction.FETCH_SUCCESS, payload: response.data.topic });
        } catch (e) {
            dispatch({ type: TopicAction.FETCH_ERROR, payload: e });
        }

    }, []);

    return <TopicContext.Provider value={{
        state,
        fetchTopics
    }}>
        {children}
    </TopicContext.Provider>
}

export default TopicProvider;
