import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function Calculater () {
const [out,setOut] = useState(" ");

const inpRef =useRef(null);

useEffect(() => inpRef.current.focus());

function ClickHandler (e) {
    setOut(out.concat(e.target.name));
}

function CutOne () {
    setOut(out.slice(0 , -1));
}

function clearAll () {
setOut("");
}

function GenerateResult () {
try{
    setOut(eval(out).toString());
} catch(Error)
{
    setOut("Exception Error:");
}
}

return(
    <div className="cal-app">
        <div>
        <input type="text" value={out} ref={inpRef} />
        </div>
       <div className="NumberPad">
        <button id="clear" onClick={clearAll}>
            Clear</button>
        <button id="backspace" onClick={CutOne}>
            Cut</button>
        <button name="/" id="Operand" onClick={ClickHandler}>
            /</button>
        <button name="7" onClick={ClickHandler}>
            7</button>
        <button name="8" onClick={ClickHandler}>
            8</button>
        <button name="9" onClick={ClickHandler}>
            9</button>
        <button name="*" id="Operand"  onClick={ClickHandler}>
            *</button>
        <button name="4" onClick={ClickHandler}>
            4</button>
        <button name="5" onClick={ClickHandler}>
            5</button>
        <button name="6" onClick={ClickHandler}>
            6</button>
        <button name="-" id="Operand"  onClick={ClickHandler}>
            -</button>
        <button name="1" onClick={ClickHandler}>
            1</button>
        <button name="2" onClick={ClickHandler}>
            2</button>
        <button name="3" onClick={ClickHandler}>
            3</button>
        <button name="+" id="Operand"onClick={ClickHandler}>
            +</button>
        <button name="0" onClick={ClickHandler}>
            0</button>
        <button name="." onClick={ClickHandler}>
            .</button>
        <button id="out" onClick={GenerateResult}>
            =</button>
            <button name="%" id="Operand"onClick={ClickHandler}>
            %</button>
       </div>
    </div>
);
}

export default Calculater;