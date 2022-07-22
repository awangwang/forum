import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import LeaderboardPopUp from './Components/LeaderboardPopUp';
import './App.css';
import './PopUp2.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section>
        <Search />
      </section>
      <hr className='separator'/>
      <section>
        <div className='container'>
          <Content />
          <Sidebar />
        </div>
      </section>
      <LeaderboardPopUp />
    </div>
  );
}

export default App;
