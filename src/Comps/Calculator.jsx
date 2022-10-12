import React, { useState } from 'react';
import '../Styles/Calculator.css'
import useCalculate from './useCalculate';


const Calculator = () => {
  const {calc, 
    setCalc, 
    handleChange, 
    handleClick,
    handleClickDot, 
    calculate, 
    backspace, 
    clear} = useCalculate('')
  
  return (
     <main className="container" >
      <div>
      <form>
        <input
          type="text" 
          onChange={handleChange} 
          value={calc}
          className="inp" />
      </form>
      </div>
      <div className="btns" >
        
          <button value="clear" onClick={clear} className="clear" > Clear </button>
          <button value="C" onClick= {backspace} className="backspace"> CE </button>
          <button value="/" onClick={handleClick} className="sign" > &divide;</button>
        
      
        
          <button value="7" onClick={handleClick} > 7 </button>
          <button value="8" onClick={handleClick} > 8 </button>
          <button value="9"onClick={handleClick} > 9 </button>
          <button value="*"onClick={handleClick} className="sign" > &times;</button>
        
     
        
          <button value="4" onClick={handleClick}> 4 </button>
          <button value="5" onClick={handleClick}> 5 </button>
          <button value="6" onClick={handleClick}> 6 </button>
          <button value="-" onClick={handleClick} className="sign" > - </button>
        
      
       
          <button value="1" onClick={handleClick}> 1 </button>
          <button value="2" onClick={handleClick}> 2 </button>
          <button value="3" onClick={handleClick}> 3 </button>
          <button value="+" onClick={handleClick} className="sign" > + </button>
        
      
        
          <button value="." onClick={handleClickDot} className="decimal" > . </button>
          <button value="0" onClick={handleClick}> 0 </button>
          <button value="=" onClick={() => calculate()} className="equate sign"> = </button>
        
      </div>
     </main>
    )
}

export default Calculator 