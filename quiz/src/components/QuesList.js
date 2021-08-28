import React from "react";
import "./ques.css"
export default function QuesList({data : question}) {
    console.log(question)
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="option">

                        <h2 dangerouslySetInnerHTML={{__html: question.question}} />
    
                    </div>
                </div>

            </div>
            <br />
            <div className="row">
                <div className="col-md-6" >
                    <div className="option">
                        kaka
                    </div>
                </div>

                <div className="col-md-6" >
                    <div className="option">
                        kaka 
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="option">
                        kaka
                    </div>
                </div>

                <div className="col-md-6" >
                    <div className="option">
                        all of the above
                    </div>
                </div>
            </div>
        </div>
    )
}