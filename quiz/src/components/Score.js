import React from "react";

export default function Score({ans}) {

    return (

        <div className="main-sc">
            <div className="card1 sc">
                Your score is {ans}
                <br />
                <br />
    
                
                <a href="http://localhost:3000/info"><button>Go back to Main Menu</button></a>
                <br />
                <a href=""><button>Restart the quiz</button></a>
            </div>
        </div>
    )
}
