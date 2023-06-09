import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import store from './store';
import {Provider} from "react-redux"
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // in order to use store we need a provider that can be used from react-redux

  <React.StrictMode>

    <Provider store = {store}>
    {/* Calling the desired component */}
    <App/>
    </Provider>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

