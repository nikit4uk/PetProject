import React, { Component } from "react";
import './Error.css';
import ErrorIcon from '../../img/Error/error-icon.png';

export default class Error extends Component {
    render() {
        return (
            <section className="error">
                <img src={ErrorIcon} alt="Error icon" />
                <h1>Somethings was wrong</h1>
                <h2>But there is nothing that cannot be fixed</h2>
            </section>
        )
    }
}
