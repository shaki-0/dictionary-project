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
      <footer className="text-center">Coded by Shaki Obadina</footer>
      </div>
    </div>
  );
}


