import './App.css';
import MainContainer from './containers/MainContainer';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <MainContainer/>
    </Router>
  );
}

export default App;