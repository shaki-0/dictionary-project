import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header>
        <img
          className="mt-5"
          src="/images/logo/header.png"
          alt="dictionary header"
        />
      </header>
      <Search defaultWord="abstraction" />
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


