import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Open Source Code by{" "}
          <a href="https://www.linkedin.com/in/sharibaldie/" target="_blank">
            Shari Baldie
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
