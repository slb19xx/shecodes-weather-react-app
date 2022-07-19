import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/slb19xx/weather-react-app"
            target="_blank"
          >
            Open Source Code
          </a>{" "}
          by{" "}
          <a href="https://www.linkedin.com/in/sharibaldie/" target="_blank">
            Shari Baldie
          </a>
        </footer>
      </div>
    </div>
  );
}
