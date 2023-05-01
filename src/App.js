import logo from './logo.svg';
import mem from './mem.jpg';
import './App.css';
import articles from '../src/data/articles.json'

function App() {
  return (
    <div className="app">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={mem} className='pic'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        
      </header>
      <nav className='nav'>
        <ul>

          {articles.map(item => 

            <li key={item.href}><a href={item.href}>{item.title}</a></li>

          )}

        </ul>
      </nav>
    </div>
  );
}



export default App;
