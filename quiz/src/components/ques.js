import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import QuesList from "./QuesList";

import "./ques.css"

const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

export default function Ques() {

    
    const [ques, setQues] = useState([])
    const [ans, setAns] = useState(0)

    useEffect(() => {

        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                setQues(data.results)
            })

        console.log(ques)
    }, [])
    const handleAns = (ans) => {

        //if answer received is correct, score is increased else decreased
        
        // and so is the index
    }
    return ques.length > 0 ? (
        <div className="container">
            <Confetti width={window.innerWidth}  height={window.innerHeight} opacity={0}/>
            <QuesList data={ques[0]} handleAns={handleAns}/>

            {/* 
            1.create an array of question 
            2. api example:https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
            */}
        </div> 
    ): (
        <h1>Loading..</h1>
    )

}