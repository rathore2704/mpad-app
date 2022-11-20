import './App.css'

import OpAp from './components/OpAp';
import BsLc from './components/BsLc';
//import OperPort from './components/OperPort';
import Password from './components/Password'
// import React, { useState } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Setting from './components/Setting'
// import SetProdEntries from './components/SetProdEntries'
// 
// import AdminPortal from './components/AdminPortal'
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom'



//import ProdTable from './components/ProdTable'

function App() {


  return (
    <>
      <Router>

      <Route path="/"><OpAp /></Route>
        <Switch>
        
          <Route exact path="/bslc" >
          <BsLc />
          </Route>
          <Route exact path="/password">
          <Password />
          </Route>
        </Switch>
      </Router>
      {/* <OpAp/>
      <BsLc/>
      <Password/> */}
      {/* <ProdTable/>
      <AdminPortal/>
      <SetProdEntries/>
      <Setting/>
      <Header/>
      <Footer/> */}

    </>
  )
}

export default App
