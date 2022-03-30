import react from "react";
import '@testing-library/jest-dom/extend-expect';
import { ITopic } from "../../interfaces";
import { useTopics } from "../../hooks/useTopics";

let loading = false;
let error = '';
let topics: ITopic[] = [];
const fetchTopics = jest.fn();

beforeEach(() => {
    jest.spyOn(react, 'useContext').mockImplementation(() => ({
        state: {
            loading,
            error,
            topics,
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
    expect(useTopics()).toEqual({loading, error, topics})
    expect(fetchTopics).toBeCalledWith('react');
});

test('should call fetchTopics with the name provided', () => {
    expect(useTopics('Vue')).toEqual({loading, error, topics})
    expect(fetchTopics).toBeCalledWith('Vue');
});
