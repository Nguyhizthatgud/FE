import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Controler from './components/Dashboard/Controler';
import Devices from './components/Dashboard/Devices';
import Credential from './components/Dashboard/Credential';
import Createroom from '../src/components/Crudtable/Createroom';
import Updateroom from '../src/components/Crudtable/Updateroom';
import Bar from './components/Dashboard/Bar';
import Information from './components/Dashboard/Information';
import Room from './components/Dashboard/Room';
import Portfolio from './components/portfolio/Portfolio';
import Loginpage from './components/Loginpage';
function App() {
  return (
    <div className='App'>
      <Loginpage />

      {/* <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/dashboard">
         
          <Route path="" element={<Dashboard />} />

          <Route
            path="controler"
            element={
              <>
                <div className="container-fluid">
                  <div className="row gy-auto">
                    <Bar />
                    <Information />
                    <Controler />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="devices"
            element={
              <>
                <div className="container-fluid">
                  <div className="row gy-auto">
                    <Bar />
                    <Information />
                    <Devices />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="credential"
            element={
              <>
                <div className="container-fluid">
                  <div className="row gy-auto">
                    <Bar />
                    <Information />
                    <Credential />
                  </div>
                </div>
              </>
            }
          />
        </Route>
      </Routes> */}
    </div>


  );
}

export default App;
