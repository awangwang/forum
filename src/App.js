import Navbar from './Components/Navbar';
import Rubies from './Components/Rubies';
import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/rubies" element={<Rubies/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
