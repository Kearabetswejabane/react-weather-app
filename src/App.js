import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Kearabetswejabane" target="blank">
            Kearabetswe Jabane
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Kearabetswejabane/react-weather-app"
            target="blank"
          >
            Open Sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
