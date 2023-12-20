import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Controler from './components/Dashboard/Controler';
import Devices from './components/Dashboard/Devices';
import Credential from './components/Dashboard/Credential';
import Createroom from '../src/components/Crudtable/Createroom';
import Updateroom from '../src/components/Crudtable/Updateroom';

import Portfolio from './components/portfolio/Portfolio';
function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/room" element={<Createroom />} />
        <Route path="/dashboard/createroom" element={<Createroom />} />
        <Route path="/dashboard/createroom" element={<Createroom />} />
        <Route path="/dashboard/updateroom" element={<Updateroom />} />
        <Route path="/dashboard/controler" element={<Controler />} />
        <Route path="/dashboard/devices" element={<Devices />} />
        <Route path="/dashboard/credential" element={<Credential />} />

      </Routes>

    </div >

  );
}

export default App;
