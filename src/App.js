import Navbar from './Components/Navbar';
import Rubies from './Components/Rubies';
import MainPage from './Components/MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css';

function App() {
  const [rubyCount, setRubyCount] = useState(1000);
  const [purchasedItems, setPurchasedItems] = useState({});

  return (
    <div className="App">
      <header>
        <Navbar rubyCount={rubyCount} />
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/rubies"
           element={
            <Rubies 
              rubyCount={rubyCount}
              setRubyCount={setRubyCount}
              purchasedItems={purchasedItems}
              setPurchasedItems={setPurchasedItems}
            />
            } 
          />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
