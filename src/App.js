import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './PassChar';
import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

function App() {
let[upperCase,setUpperCase]= useState(false);
let [lowerCase, setLowerCase] = useState(false);
let [numbers, setNumbers] = useState(false);
let [symbols, setSymbols] = useState(false);
let [PassLen, setPassLen] = useState(8);
let [genPass,setGenPass]=useState()



let generatePass=() =>{
  let checkingPass = PassLen;
  if(checkingPass >16){
    toast.error("Value must be less than or Equal to 16")
  }
  else if(checkingPass < 8){
     toast.error("Value must be greater than or Equal to 8");
  }
  else{
let finalPass = "";
let CharSet ="";
if(upperCase || lowerCase || numbers || symbols){
        if(upperCase) CharSet+=UC;
        if(lowerCase) CharSet+=LC;
        if(numbers) CharSet+=NC;
        if(symbols) CharSet+=SC
        for(let j=1; j<=PassLen;j++){
          finalPass+=CharSet.charAt(Math.floor(Math.random()*CharSet.length))
        }
       setGenPass(finalPass);
}
else{
  toast.success("Please Select Atleast One ChecBox....")
}
  }

}

let copyPass=() =>{
  if(genPass == undefined){
  toast.warning("YOu can't copy password without generate ")  
  }else{
  navigator.clipboard.writeText(genPass)
  toast.success("Password Copied.")
   }
}

  return (
    <>
      <div className="App">
        <h1>Password Generator</h1>
        <input type="text" readOnly value={genPass} />
        <button onClick={copyPass} >Copy</button>
        <div className="div1">
          <p>Password lenght</p>
          <input
            type="number"
            max={16}
            min={8}
            value={PassLen}
            onChange={(evt) => setPassLen(evt.target.value)}
          />
        </div>
        <div className="div2">
          <p>Include upperCase letters</p>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setUpperCase(!upperCase)}
          />
        </div>
        <div className="div3">
          <p>Include lowerCase letters</p>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={() => setLowerCase(!lowerCase)}
          />
        </div>
        <div className="div4">
          <p>Include numbers</p>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div className="div5">
          <p>Include symbols</p>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <div>
          <button onClick={generatePass} className="btn">
            Generate Password
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
