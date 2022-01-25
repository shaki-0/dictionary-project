import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header"></header>
        <Search />
      </div>
      <div>
        <footer className="Wrapper">
          <a
            className=" text-center git-link"
            href="https://github.com/shaki-0/dictionary-project"
          >
            Coded by Shaki Obadina
          </a>
        </footer>  
      </div>
    </div>
  );
}


