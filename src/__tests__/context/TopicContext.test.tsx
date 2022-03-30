import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { TopicContext } from '../../context/TopicContext';

const customRender = (ui: any, {providerProps, ...renderOptions}: any) => {
    return render(
      <TopicContext.Provider {...providerProps}>{ui}</TopicContext.Provider>,
      renderOptions,
    )
}

const FakeConsumer = () => {
    const { topics }: any = useContext(TopicContext);
    return (
        <>Topics length: {topics.length}</>
    )
};


test('should something', () => {
    const providerProps = {
        value: {
            topics: [],
            loading: false,
            error: '',
        },
      }
      customRender(<FakeConsumer />, {providerProps})
      expect(screen.getByText(/^Topics length:/)).toHaveTextContent('Topics length: 0')
});
