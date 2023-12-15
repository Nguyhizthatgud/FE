import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Bar from './components/Bar'
import Information from './components/Information'
import Room from './components/Room'
import Controler from './components/Controler';
import Devices from './components/Devices';
import Credential from './components/Credential';
import Createroom from './components/Crudtable/Createroom';
import Updateroom from './components/Crudtable/Updateroom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {




  return (
    <div className='App container-fluid overflow-hidden'>
      <div className="row gy-auto">
        <Bar />
        <Information />

        <Routes>
          <Route path="/" element={<Room />} />
          <Route path="/createroom" element={<Createroom />} />
          <Route path="/updateroom" element={<Updateroom />} />
          <Route path="/controler" element={<Controler />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/credential" element={<Credential />} />
        </Routes>

      </div>

    </div >

  );
}

export default App;
