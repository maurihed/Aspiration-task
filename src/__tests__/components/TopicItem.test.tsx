/* eslint-disable testing-library/no-node-access */
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TopicItem from '../../components/TopicItem';
import { create } from 'react-test-renderer';

let topic = {
    name: 'Vue',
    stargazerCount: 123,
};

test.only('should render topics', async () => {
    const renderer = create(
        <MemoryRouter initialEntries={[`/topic/react`]}>
            <Routes>
                <Route path="topic/:name" element={<TopicItem topic={topic} />} />
            </Routes>
        </MemoryRouter>
    );

    const link: any = renderer.toJSON();
    expect(link.props.href).toBe(`/topic/${topic.name}`);
});
