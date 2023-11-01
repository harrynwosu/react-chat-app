import React from "react";
import { LoginForm, Chat } from './components';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {!localStorage.getItem('username') ?
          <Route path='/login'  Component={LoginForm} /> :
          <Route exact path='/' Component={Chat} />
        }
      </Routes>
    </Router>
  )
}

export default App;