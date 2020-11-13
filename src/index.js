import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './Router';
import NavBar from './components/NavBar'

const Main = () => (

  <BrowserRouter>
      <NavBar />
      <Router />
  </BrowserRouter>

);

ReactDOM.render(<Main />, document.getElementById('root'));


