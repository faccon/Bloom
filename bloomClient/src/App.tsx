import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { FirstPage } from "./components/FistPage";

function App() {
  return (
    <div className="container">
      <section className="FirstPage">
        <Header />
        <FirstPage />
      </section>
    </div>
  );
}

export default App;
