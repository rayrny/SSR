// import "./App.css";

import FancyButton from "./components/FancyButton";

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
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
        <FancyButton>button hello</FancyButton>
      </header>
    </div>
  );
}

export default App;
