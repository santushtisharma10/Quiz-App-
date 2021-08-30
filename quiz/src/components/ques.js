import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import QuesList from "./QuesList";
import photo from "./e8464bfc-80fd-4582-b18a-77c9508c7b69.png";
import Score from "./Score";

import "./ques.css"

const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

export default function Ques() {

    
    const [ques, setQues] = useState([])
    const [ans, setAns] = useState(0)
    const [index, setIndex] = useState(0)
    const [end, setEnd] = useState(false)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                setQues(data.results)
            })

        console.log(ques)
    }, [])
  
    const handleAns = (answer) => {

        // if ans received is correct, score is increased else unaffected

        if(answer === ques[index].correct_answer) {

            setAns(ans+1);
        }
        const newIdx = index+1
        setIndex(newIdx)
        
        if(newIdx >= ques.length) {

            setEnd(true)

            console.log("end");
            
        }
        
    }

    return end ? (<div>
        <Score ans={ans}/>
        <Confetti width={window.innerWidth}  height={window.innerHeight} />
    </div>) : ques.length > 0 ? (
        <div className="container">
            
            <QuesList data={ques[index]} handleAns={handleAns} />
            {/* 
            1.create an array of question 
            2. api example:https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
            */}
        </div> 
    ): (
        <div className="main">
            <img src={photo} height={window.innerHeight/2} width={window.innerWidth/3}/>
        </div>
       
    )
    
}

// add an option to restart the game
// styling needs to be improved
// score card needs to generated
// add timer option
