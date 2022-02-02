import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header className="firstSections">
        <h1> Dictionary </h1>
      </header>
      <Search />
      <footer className="firstSections">
        <a
          className="git-link"
          href="https://github.com/shaki-0/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Coded by Shaki Obadina
        </a>
      </footer>
    </div>
  );
}


