import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './components/WelcomePage/welcome';
import Index from './components/WelcomePage/index';
import Embrace from './components/WelcomePage/embrace';
import Nourish from './components/WelcomePage/nourish';
import PageOne from './components/WelcomePage/pageone';
import Pagetwo from './components/WelcomePage/pagetwo';
import Pagethree from './components/WelcomePage/pagethree';
import Pagefour from './components/WelcomePage/pagefour';
import Pagefive from './components/WelcomePage/pagefive';
import Pagesix from './components/WelcomePage/Pagesix';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
    <Welcome/>
    <Embrace/>
    <Nourish/>
    <PageOne/>
    <Pagetwo/>
    <Pagethree/>
    <Pagefour />
    <Pagefive/>
    <Pagesix/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
