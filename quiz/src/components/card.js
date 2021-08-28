import React, {useState, useEffect} from "react"
import "./card.css"


export default Card
function Card({vis, setVis}) {
  
    

    return (

      <div className="main">
          
      <div className="card1">
      
          
              <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="glow">Quizzy</h1>
            <br />
    
            <h1 className="tagline">A good day to Quiz hard</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            {/*set link to info page*/}
          
            <a href="http://localhost:3000/info"><button type="button">Enter to get started</button> </a>        
        
        </div>
        
     </div>
    
      );
}