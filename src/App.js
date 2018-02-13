import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        window.addEventListener( 'gamepadconnected', ( e ) => {
            console.log( e );
        } );
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>gamepadgame</h1>
                </header>
                <p className="App-intro">
                </p>
            </div>
        );
    }
}

export default App;
