import './App.css';
import React, { useState, useEffect } from "react";
import Card from './components/card';
import Ques from './components/ques';
import Info from './components/info';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
//import { DataProvider } from "./dataContext"
 

function App() {

  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/ques" element={<Ques />}/>
        </Routes>
      </Router>

      
    
    </div>


  );
}

export default App;
