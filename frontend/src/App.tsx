import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Instructions from './pages/Instructions';

function App() {
  return (
    <div>
      <Navigation />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Instructions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
