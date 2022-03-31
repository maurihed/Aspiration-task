import { useContext, useEffect } from "react";
import { TopicContext } from "../context/TopicContext";
import { ITopicContext } from "../interfaces";

export const useTopics = (name = 'react') => {
    const { state, fetchTopics } = useContext(TopicContext) as ITopicContext;
    const { topic, loading, error } = state;

    useEffect(() => {
        fetchTopics(name);
    }, [fetchTopics, name]);


    return {
        loading,
        error,
        topic,
    }
}
