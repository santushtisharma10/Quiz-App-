//import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  return (
    <div>
      <h1>Welcome to the quiz app <br />Choose the correct fields and start the quiz</h1>
      <br /><br />
      
        <div class="row padding">
          
          <div class="col-md-3">
        <select >
          <option selected>Difficulty Level</option>
          <option value="easy">Easy</option>
          <option value="med">Medium</option>
          <option value="hard">Hard</option>
        </select>
        </div>
        <div class="col-md-3">
        <select>
          <option selected>Category</option>
          <option value="">General Knowledge</option>
          <option value="">History</option>
        </select>
        </div>
        <div class="col-md-3">
        <select>
          <option selected>Number of Questions</option>
          <option value="">10</option>
          <option value="">15</option>
        </select>
        </div>
        <div class="col-md-3">
        <select>
          <option selected>type</option>
          <option value="">dont know</option>
          <option value="">what to write here</option>
        </select>
        </div>
       <br /><br />
        <div class="col-12">
          <button class="btn btn-primary">Submit</button>
        </div>        
        </div>
      
    </div>
  );
}

export default App;
