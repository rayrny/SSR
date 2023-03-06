import styled from "styled-components";

import { GlobalStyle } from "./global-style";
import FancyButton from "./components/FancyButton";

function App() {
  return (
    <>
      <GlobalStyle />
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
          <br />
          <FancyButton>button hello</FancyButton>
        </header>
      </div>
    </>
  );
}

export default App;
