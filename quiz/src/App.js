import './App.css';
import React,{useState, useEffect} from "react";
import Card from './components/card';
import Ques from './components/ques';
import Info from './components/info';

function App() {
  
  
  const [vis, setVis] = useState("none")

  useEffect(()=>{

    console.log(vis)

  }, [vis])
  return (

    
       <div className="main">
          
        <div className="card1">
        
        <Card vis={vis} setVis={setVis}/>
      
        {vis === "visible" && <Info />}
        </div>
        </div>
     

      
    

  );
}

export default App;
