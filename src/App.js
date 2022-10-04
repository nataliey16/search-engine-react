import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer>
          This project was coded by
          <a href="/" target="_blank" rel="noreferrer">
            {" "}
            Natalie Yeung{" "}
          </a>
          and it is
          <a
            href="https://github.com/nataliey16/search-engine-react.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://clinquant-cheesecake-c78d8c.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
