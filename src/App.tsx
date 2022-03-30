import './assets/App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TopicPage from './pages/TopicPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="topic" />} />
          <Route path="topic" element={<TopicPage />}>
            <Route path=":name" element={<TopicPage/>} />
          </Route>
          <Route path='*' element={<Navigate to="topic" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
