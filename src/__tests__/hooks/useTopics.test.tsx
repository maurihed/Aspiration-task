import react from "react";
import '@testing-library/jest-dom/extend-expect';
import { ITopic } from "../../interfaces";
import { useTopics } from "../../hooks/useTopics";

let loading = false;
let error = '';
let topic: ITopic = {
    name: 'react',
    stargazerCount: 123,
    relatedTopics: [],
};
const fetchTopics = jest.fn();

beforeEach(() => {
    jest.spyOn(react, 'useContext').mockImplementation(() => ({
        state: {
            loading,
            error,
            topic,
        },
        fetchTopics
    }));

    jest.spyOn(react, 'useEffect').mockImplementation((fn: (name: string) => void, deps: any) => {
        if (deps?.length) {
            fn(deps[1]);
        }
    });
});

test('should call fetchTopics with the default value', () => {
    expect(useTopics()).toEqual({loading, error, topic})
    expect(fetchTopics).toBeCalledWith('react');
});

test('should call fetchTopics with the name provided', () => {
    expect(useTopics('Vue')).toEqual({loading, error, topic})
    expect(fetchTopics).toBeCalledWith('Vue');
});
