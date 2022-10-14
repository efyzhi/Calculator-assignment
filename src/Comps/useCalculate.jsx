  import React, {useState} from 'react';
  
  const useCalculate = (initial) => {
  
  const [calc, setCalc] = useState(initial) 
  const handleClick = (e) => {
    
    setCalc(calc + e.target.value) 
  }
    
const handleClickDot = (e) => {
    let val = e.target.value; let sign = val.trim()
    if (calc.slice(calc.length-1) === sign) {
      setCalc((prevValue) => prevValue);
    }
    if (calc.includes(sign)) {
      return;
    }
    setCalc((prevValue) => prevValue.concat(sign));
  };
    
  const handleChange = (e) => {
    setCalc(e.target.value);
  }
  
  const backspace = () => {
      setCalc(calc.slice(0, -1)) 
    }
    
    const clear = () => {
      setCalc("") 
    }
  
  const calculate = () => {
    try {
      setCalc(eval(calc))
    }catch(error) {
      setCalc("error") 
    }
  }
  
  return{
   calc, 
    setCalc, 
    handleChange, 
    handleClick, 
    handleClickDot, 
    calculate, 
    backspace, 
    clear
} 
  } 
  
  export default useCalculate