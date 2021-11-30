import React, { useState, useEffect, useContext } from "react";
import Confetti from "react-confetti";
import QuesList from "./QuesList";
import photo from "./e8464bfc-80fd-4582-b18a-77c9508c7b69.png";
import Score from "./Score";
import "./ques.css"
import { DataContext } from "../dataContext";

export default function Ques() {

    const {num, type, catg, diff} = useContext(DataContext);
   
    console.log("Type", type)
    console.log("num", num)
    console.log("Category", catg)
    console.log("difficulty", diff)
    
    const url = "https://opentdb.com/api.php?amount="+num+"&category="+catg+"&difficulty="+diff+"&type="+type
    console.log(url)
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

        if (answer === ques[index].correct_answer) {

            setAns(ans + 1);
        }
        const newIdx = index + 1
        setIndex(newIdx)

        if (newIdx >= ques.length) {

            setEnd(true)

            console.log("end");

        }

    }

    return end ? (<div>
        <Score ans={ans} />
        <Confetti width={window.innerWidth} height={window.innerHeight} />
    </div>) : ques.length > 0 ? (
        <div className="container">

            <QuesList data={ques[index]} handleAns={handleAns} />

        </div>
    ) : (
        <div className="main">
            <img src={photo} height={window.innerHeight / 2} width={window.innerWidth / 3} />
        </div>

    )

}

// styling needs to be improved
// take input from form to generate api
// add timer option or peve/next which is to be selected by user
