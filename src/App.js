import "./styles.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1 className="search">Weather Search</h1>
      <Weather />
      <footer>
        Open Source Code by{" "}
        <a href="https://www.linkedin.com/in/sharibaldie/" target="_blank">
          Shari Baldie
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
