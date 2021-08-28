import React from "react";
import "./ques.css"
import Confetti from "react-confetti"

export default function QuesList({ handleAns, data: { question, correct_answer, incorrect_answers }, val}) {
    
    console.log(question)
    const arr = [correct_answer, ...incorrect_answers].sort(()=> Math.random()-0.5);
    const c = {

        backgroundColor : "lightgreen"
    }
    const w = {

        backgroundColor : "red"
    }
    
    return (
        <div>
            
            <Confetti width={window.innerWidth}  height={window.innerHeight} opacity={val}/>
            <div className="row">
                <div className="col-12">
                    <div className="option">

                        <h2 dangerouslySetInnerHTML={{ __html: question }} />

                    </div>
                </div>

            </div>
            <br />
            <div className="row">

                {
                    arr.map((element) => {

    

                        return (
                        <div className="col-md-6" >
                            <div className="option" onClick={()=> {
                                handleAns(element)
                            }} >
                                {element}
                            </div>
                        </div>)
                    })
                }
                
            </div>
        </div>
    )
}