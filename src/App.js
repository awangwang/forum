import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';
import './App.css';

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
    </div>
  );
}

export default App;
