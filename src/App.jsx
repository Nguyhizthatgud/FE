import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/portfolio/Footer';
import Header from './components/portfolio/Header';
import Homepage from './components/portfolio/Homepage'
import Dashboard from './components/Dashboard/Dashboard';
import { Router } from 'react-router-dom';
function App() {




  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
      <Dashboard />
    </div >

  );
}

export default App;
