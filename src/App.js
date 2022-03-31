import LandingPage from './pages/LandingPage/components/MainContainer/Main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
