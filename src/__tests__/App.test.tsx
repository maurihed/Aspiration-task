import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { Navigate } from 'react-router-dom';

test('should render navigate if the route is /', async () => {
    const component = TestRenderer.create(<App />);
    await component.root.findByType(Navigate);
});
