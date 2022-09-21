import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container pt-5">
        <Weather />
        <footer>
          <a
            href="https://github.com/nataliey16/search-engine-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Natalie Yeung
        </footer>
      </div>
    </div>
  );
}

export default App;
