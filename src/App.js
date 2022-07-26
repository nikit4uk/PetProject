import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ErrorBoundry from "./components/Error/ErrorBoundry/ErrorBoundry";

export default class App extends Component {
  render() {
    return (
      <ErrorBoundry>
        <main>
          <Header />
          <Main />
        </main>
      </ErrorBoundry>
    );
  }
}
