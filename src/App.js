import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Calgary" />
        <footer>
          This project was coded by <span className="name">Natalie Yeung.</span>
          <br />
          It is open-sourced on
          <a
            href="https://github.com/nataliey16/search-engine-react.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://clinquant-cheesecake-c78d8c.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
          <br />
          <div className="favicon">
            <a
              target="_blank"
              href="https://icons8.com/icon/515/cinema"
              rel="noreferrer"
            >
              Cinema
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com" rel="noreferrer">
              Icons8
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
