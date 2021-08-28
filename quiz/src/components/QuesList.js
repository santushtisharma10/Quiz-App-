import React from "react";
import "./ques.css"
export default function QuesList({ data: { question, correct_answer, incorrect_answers } }) {
    console.log(question)
    const arr = [correct_answer, ...incorrect_answers];
    return (
        <div>
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
                            <div className="option">
                                {element}
                            </div>
                        </div>)
                    })
                }
                
            </div>
        </div>
    )
}