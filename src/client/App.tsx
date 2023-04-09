import styled from "styled-components";

import FancyButton from "./components/FancyButton";

function App() {
  return (
    <div className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Reactdsfsdf
      </a>
      <h2>할 수 있 다!</h2>
      <br />
      <div>
        <FancyButton color="primary">primary</FancyButton>
        <FancyButton color="secondary">secondary</FancyButton>
        <FancyButton color="success">success</FancyButton>
        <FancyButton color="danger">danger</FancyButton>
        <FancyButton color="warning">warning</FancyButton>
        <FancyButton color="info">info</FancyButton>
      </div>
    </div>
  );
}

export default App;
