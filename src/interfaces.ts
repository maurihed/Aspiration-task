import { TopicAction } from "./enums";

export interface ITopic {
    name: string;

    stargazerCount: number;

    relatedTopics?: ITopic[];
}

export interface IState {
    topic: ITopic|null;

    loading: boolean;

    error: string;
}

export interface TopicActionType {
    type: TopicAction;

    payload?: any;
}

export interface ITopicContext {
    state: IState;

    fetchTopics: (name: string) => Promise<void>;
}