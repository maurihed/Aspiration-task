import { TopicAction } from "./enums";

export interface ITopic {
    name: string;

    stargazerCount: number;
}

export interface IState {
    topics: ITopic[];

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