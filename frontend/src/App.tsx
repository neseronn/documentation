import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Instructions from './pages/Instructions';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <div>
      <Navigation />
      <div className='content wrapper'>
        <Routes>
          <Route path='/articles' element={<Instructions />} />
          <Route path='/articles/:id' element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
