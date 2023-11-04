import React from "react";
import { LoginForm, Chat } from './components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";

const HomeRoute = ({ children }) => {
  if (!localStorage.getItem('username')) {
    return <Navigate to='/login' />
  }
  return children;
}

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route 
            path='/'
            element = {
              <HomeRoute>
                <Chat />
              </HomeRoute>
            }
          />
          {/* Handle non-existent routes */}
          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App;