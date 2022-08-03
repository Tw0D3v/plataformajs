
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Signin from './components/signin';
function App() {
  return (
    
    <Router>
      <Signin />
    </Router>
  );
}

export default App;
