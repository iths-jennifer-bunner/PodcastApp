import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodcastPage from './components/PodcastPage';
import ListPodcasts from './components/ListPodcasts';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ListPodcasts />} />
          <Route path="/:slug" element={<PodcastPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
