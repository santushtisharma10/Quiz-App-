import './App.css';
import React, { useState, useEffect } from "react";
import Card from './components/card';
import Ques from './components/ques';
import Info from './components/info';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { DataProvider } from "./dataContext"
 

function App() {

  return (


    <Router>
      <Switch>
        <Route path="/" exact component={Card} />
        <DataProvider >
          <Route path="/info" component={Info} />
          <Route path="/ques" component={Ques} />
        </DataProvider>
      </Switch>
    </Router>


  );
}

export default App;
