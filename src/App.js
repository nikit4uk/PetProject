import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = (props) => {
  return (
    <main>
      <Header />
      <Main />
    </main>
  );
}

export default App;
