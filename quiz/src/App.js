import './App.css';
import React,{useState, useEffect} from "react";
import Card from './components/card';
import Ques from './components/ques';
import Info from './components/info';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function App() {
  
  
  const [vis, setVis] = useState("none")

  useEffect(()=>{

    console.log(vis)

  }, [vis])
  return (

       <div>
         <Router>
         <Switch>
         <Route path="/" exact component={Card}/>
         <Route path="/info" component={Info}/>
         <Route path="/ques" component={Ques}/>
         </Switch>
         </Router>
         
       </div>     
    

  );
}

export default App;
