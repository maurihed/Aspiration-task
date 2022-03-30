import { useContext, useEffect } from "react";
import { TopicContext } from "../context/TopicContext";
import { ITopicContext } from "../interfaces";

export const useTopics = (name = 'react') => {
    const {state, fetchTopics} = useContext(TopicContext) as ITopicContext;

    useEffect(() => {
        fetchTopics(name);
    }, [fetchTopics, name]);

    return {
        ...state,
    }
}
