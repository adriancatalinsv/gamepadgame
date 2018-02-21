import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const controllers = {};
let controllersCache = {};
const rAF = window.requestAnimationFrame;
const axes = [];
const buttons = {};
function update( gamepad ) {
    scan( gamepad );
    rAF( update );
}
function scan( defaultGamepad ) {
    controllersCache = {... controllers};
    if ( defaultGamepad && defaultGamepad instanceof Object ) {
        controllers[ defaultGamepad.index ] = defaultGamepad;
    } else {
        Object.entries( navigator.getGamepads() ).forEach( ( [ idx, gamepad ] ) => {
            if ( gamepad ) {
                controllers[ gamepad.index ] = gamepad;
            }
        } );
    }
}
// Initialize gamepad
window.addEventListener( 'gamepadconnected', ( event ) => {
    update( event.gamepad );
} );

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
