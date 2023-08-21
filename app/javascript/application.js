// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import './react/src/index.js'
import * as bootstrap from "bootstrap"

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const handleReactRedux = document.querySelector('#handle-react-redux');

    if(handleReactRedux) {
        handleReactRedux.addEventListener('click', (e) => {
            e.preventDefault();
            location.href = "/fw/react/home"
        });
    }
});