import React, {useState, useEffect} from "react"
import "./card.css"


export default Card
function Card({vis, setVis}) {
  
    const[enter, setEnter] = useState("visible")
    
    useEffect(() => {
      
      
      //console.log(enter)
      
    }, [])

    return (

       
          <div className="text" style={{display: enter}}>
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
          
            <button type="button" onClick={()=> {
              setEnter("none")
              setVis("visible")}}>Enter to get started</button>         
        
        </div>
        
     
    
      );
}