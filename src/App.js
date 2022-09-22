import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <ul className="App-header">
          <li className="current-date">Sept 21 2022</li>
          <li className="city">
            Calgary,
            <div>Alberta</div>
          </li>
        </ul>
      </header>
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/nataliey16/search-engine-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Natalie Yeung
        </footer>
      </div>
    </div>
  );
}

export default App;
