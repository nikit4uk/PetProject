import React, { Component } from "react";
import Error from '../Error'

export default class ErrorsBoundry extends Component {
    state = {
        hasError: false
    }
      
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    
    render() {
    
        if(this.state.hasError) {
            return <Error />
        }

        return this.props.children;
    }
}