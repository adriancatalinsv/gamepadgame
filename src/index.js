import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
const controllers = {};
const rAF = window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.requestAnimationFrame;
function updateStatus() {
    scangamepads();
    for (var i = 0; i < controllers[0].buttons.length; i++) {
            var val = controllers[0].buttons[i];
            if (typeof (val) === "object" && val.pressed ) {
                console.log(val);
            }
        }

        rAF(updateStatus);
    }
function scangamepads() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
            controllers[gamepads[i].index] = gamepads[i];
        }
    }
}
window.addEventListener('gamepadconnected', (e) => {
    controllers[e.gamepad.index] = e.gamepad;
    console.log(controllers[0]);
    rAF(updateStatus);
});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
