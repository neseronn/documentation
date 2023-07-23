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
          <Route path='/' element={<Instructions />} />
          <Route path='/:id' element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
