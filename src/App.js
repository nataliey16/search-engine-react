import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Natalie Yeung and it is
          <a
            href="https://github.com/nataliey16/search-engine-react.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
