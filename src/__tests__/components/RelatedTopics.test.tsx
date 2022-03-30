import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RelatedTopics from '../../components/RelatedTopics';
import * as CustomHooks from '../../hooks/useTopics';
import { render, screen } from '@testing-library/react';

let loading = false;
let error = '';

const renderComponent = (topicName = 'react') => {
    render(
        <MemoryRouter initialEntries={[`/topic/${topicName}`]}>
            <Routes>
                <Route path="topic/:name" element={<RelatedTopics />} />
            </Routes>
        </MemoryRouter>
    );
}


beforeEach(() => {
    jest.spyOn(CustomHooks, 'useTopics').mockImplementation((name) => ({
        topics: [
            {name: `${name} 1`, stargazerCount: 1},
            {name: 'topic 2', stargazerCount: 2},
        ],
        loading,
        error
    }));
})

test('should render topics', async () => {
    const topicName = 'react';
    renderComponent(topicName);
    const firstTopic = await screen.findByText(`${topicName} 1`);
    expect(firstTopic).toBeInTheDocument();
    loading = true;
});

test('should render the loading component', async () => {
    renderComponent();
    const loadingComponent = await screen.findByText(`Loading...`);
    expect(loadingComponent).toBeInTheDocument();
    loading = false;
    error = 'some error';
})

test('should render the error component', async () => {
    renderComponent();
    const errorComponent = await screen.findByText(`Render error component`);
    expect(errorComponent).toBeInTheDocument();
})