import React, { Component } from 'react';
import './App.css';

var firstNumber = 0;
var secondNumber = null;
var operation = "";
var isSecondNumber = false;
var solve = false;
var answer = 0;

function dis(char) {
  solve = false;
  if(typeof(char) == "number") {
    if(!isSecondNumber) {
      firstNumber = firstNumber * 10 + char; 
    } else {
      secondNumber = secondNumber * 10 + char;
    }
  } else if(typeof(char) == "string") {
    operation = char;
    secondNumber = 0;
    isSecondNumber = true; 
  }
}

function solvefun() {
  solve = true;
}

function cls() {
  firstNumber = 0;
  secondNumber = null;
  operation = "";
  isSecondNumber = false;
  solve = false;
}

function getResult() {
  switch(operation) {
    case "+": return firstNumber+secondNumber;
    case "-": return firstNumber-secondNumber;
    case "*": return firstNumber*secondNumber;
    case "/": return firstNumber/secondNumber;
    default: return "err"
  }
}

class App extends Component {

  componentDidMount() {
    setInterval(()=>{
      if(!solve) {
        document.getElementById("result").innerHTML = firstNumber + operation + (secondNumber!=null ? secondNumber : "");
      } else {
        document.getElementById("result").innerHTML = getResult();
      }
    },10)
  }

  render() {
      return (
        <div className="App">
          <div class = "title" >Calculator</div> 
          <table border="1"> 
            <tr> 
                <td colspan="3"><p id="result"></p></td> 
                <td><input type="button" value="c" onClick={cls}/> </td> 
            </tr> 
            <tr> 
                <td><input type="button" value="1" onClick={() => dis(1)}/> </td> 
                <td><input type="button" value="2" onClick={() => dis(2)}/> </td> 
                <td><input type="button" value="3" onClick={() => dis(3)}/> </td> 
                <td><input type="button" value="/" onClick={() => dis('/')}/> </td> 
            </tr> 
            <tr> 
                <td><input type="button" value="4" onClick={() => dis(4)}/> </td> 
                <td><input type="button" value="5" onClick={() => dis(5)}/> </td> 
                <td><input type="button" value="6" onClick={() => dis(6)}/> </td> 
                <td><input type="button" value="-" onClick={() => dis('-')}/> </td> 
            </tr> 
            <tr> 
                <td><input type="button" value="7" onClick={() => dis(7)}/> </td> 
                <td><input type="button" value="8" onClick={() => dis(8)}/> </td> 
                <td><input type="button" value="9" onClick={() => dis(9)}/> </td> 
                <td><input type="button" value="+" onClick={() => dis('+')}/> </td> 
            </tr> 
            <tr> 
                <td><input type="button" value="." onclick="dis('.')"/> </td> 
                <td><input type="button" value="0" onClick={() => dis(0)}/> </td> 
                <td><input type="button" value="=" onClick={solvefun}/> </td> 
                <td><input type="button" value="*" onClick={() => dis('*')}/> </td> 
            </tr> 
          </table> 
        </div>
      );
  }

}

export default App;
