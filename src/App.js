import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import EventsPage from './components/EventsPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import PartnersPage from './components/PartnersPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/EventsPage" element={<EventsPage />} />
          <Route path="/PartnersPage" element={<PartnersPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;