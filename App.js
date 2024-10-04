import './App.css';
import Home from './Components/Home';
import About from './Components/About'; 
import Newsapp from './Components/Newsapp'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/news" element={<Newsapp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
