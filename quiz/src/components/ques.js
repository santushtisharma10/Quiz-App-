import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import QuesList from "./QuesList";
import photo from "./e8464bfc-80fd-4582-b18a-77c9508c7b69.png";
import Score from "./Score";
import Info from "./info";

import "./ques.css"

const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"


export default function Ques() {

    console.log(Info.num, Info.type, Info.diff)
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
            
        </div> 
    ): (
        <div className="main">
            <img src={photo} height={window.innerHeight/2} width={window.innerWidth/3}/>
        </div>
       
    )
    
}

// styling needs to be improved
// take input from form to generate api
// add timer option or peve/next which is to be selected by user
