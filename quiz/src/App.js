
import './App.css';
import React from "react"

function App() {
  return (
    <div>
      <div className="heading">
        <h1>Welcome to the quiz app <br />Choose the correct fields and start the quiz</h1>

      </div>
      <br />
      <div className="row padding">

        <div className="col-md-3">
          <select >
            <option selected data-default>Difficulty Level</option>
            <option value="easy">Easy</option>
            <option value="med">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="col-md-3">
          <select>
            <option value="" selected data-default>Category</option>
            <option value="">General Knowledge</option>
            <option value="">History</option>
          </select>
        </div>
        <div className="col-md-3">
          <select>
            <option selected data-default>Number of Questions</option>
            <option value="">10</option>
            <option value="">15</option>
          </select>
        </div>
        <div className="col-md-3">
          <select>
            <option selected>type</option>
            <option value="">dont know</option>
            <option value="">what to write here</option>
          </select>
        </div>
        <br /><br />
        <div class="col-12">
          <button >Submit</button>
        </div>
      </div>

    </div>
  );
}

export default App;
