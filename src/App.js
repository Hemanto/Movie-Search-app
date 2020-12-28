import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import './App.css';
import Routes from './Routes'
import Nav from './components/Nav';



function App() {
  return (
    <BrowserRouter>
    
        <Nav/>
        <Routes/>
      
    </BrowserRouter>
  );
}

export default App;
