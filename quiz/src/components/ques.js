import React, { useState, useEffect } from "react"

import "./ques.css"

export default function Ques() {

    const url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    const [ques, setQues] = useState([])
    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {

                setQues(data.results)
            })

        console.log(ques)
    }, [ques])

    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <div className="option">
                      TEsting purposes
                    </div>
                </div>

            </div>
            <br />
            <div className="row">
                <div className="col-md-6" >
                    <div className="option">
                        kaka kutta hai
                    </div>
                 </div>
                 
                <div className="col-md-6" >
                    <div className="option">
                        kaka harami hai
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="option">
                        kaka kamina hai
                    </div>
                </div>

                <div className="col-md-6" >
                    <div className="option">
                        all of the above
                    </div>
                </div>
                </div>
                

            
            {/* 
            1.create an array of question 
            2. api example:https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
            */}
        </div>
    )
}