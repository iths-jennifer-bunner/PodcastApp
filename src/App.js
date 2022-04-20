import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPodcasts from './components/ListPodcasts';
import PodcastPage from './components/PodcastPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ListPodcasts />} />
        <Route path="/:slug" element={<PodcastPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
