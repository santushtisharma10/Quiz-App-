import React, { useState, useContext } from "react";
import Ques from "./ques";
import photo from "./e8464bfc-80fd-4582-b18a-77c9508c7b69.png";
//import { DataContext } from "../dataContext"

export default function Info() {


  const [num, setNum] = useState("")
  const [type, setType] = useState("")
  const [catg, setCat] = useState("")
  const [diff, setDif ] = useState("");

  const handleSubmit = (e) => {

    //e.preventDefault();

    console.log(num, type, catg, diff);

    //e.target.submit();
  }

  return (

    <div className="row">
      <div className="col-md-6 ">
        <div className="main-info">
          <div className="card1 info">
            <form action="http://localhost:3000/ques" onSubmit={handleSubmit}>

              <select name="diff" value={diff} onChange={(e) => setDif(e.target.value)} required>
                <option value="" data-default>Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="med">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <br />
              <br />
              <select name="catg" value={catg} onChange={(e) => setCat(e.target.value)} required>
                <option value="" data-default>Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Films</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musical & Theatre</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="29">Entertainment: Comics</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="30">Science: Gadget</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>

              </select>
              <br />
              <br />
              <select name="num" value={num} onChange={(e) => setNum(e.target.value)} required>
                <option value="" selected data-default>Number of Questions</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <br />
              <br />

              <select name="type" value={type} onChange={(e) => setType(e.target.value)} required>
                <option selected>type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
              </select>
              <br />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

      </div>

      <div className="col-md-6">

        <img src={photo} height={window.innerHeight - 50} width={window.innerWidth / 2} />
      </div>

    </div>

  )
}

// pass values to Ques component
