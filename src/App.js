import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Error from "./components/Error/Error";

export default class App extends Component {

  state = {
    hasError: false
  }
  
  componentDidCatch() {
    console.log('componentDidCatch() ');
    this.setState({ hasError: true })
  }

  render() {

    if(this.state.hasError) {
      return (
        <Error />
      )
    }

    return (
      <main>
        <Header />
        <Main />
      </main>
    );
  }
}
