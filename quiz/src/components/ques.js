import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import QuesList from "./QuesList";

import "./ques.css"

const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

export default function Ques() {

    
    const [ques, setQues] = useState([])
    const [ans, setAns] = useState(0)
    const [index, setIndex] = useState(0)
    const [end, setEnd] = useState(false)
    const [val, setValue] = useState(0)

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
            setValue(1)
            console.log("end");
            
        }
        
    }

    return end ? (<div>
        <h2>End reached, Your score is {ans}</h2>
    </div>) : ques.length > 0 ? (
        <div className="container">
            
            <QuesList data={ques[index]} handleAns={handleAns} val={val}/>
            {/* 
            1.create an array of question 
            2. api example:https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
            */}
        </div> 
    ): (
        <h1>Loading..</h1>
    )
    
}
// add confetti effect with score effect on perfect score
// add an option to restart the game
// styling needs to be improved
// score card needs to generated
// add timer option