import React , { useState,useEffect }from 'react';

export default function ResultCalculate({ firstValue,secValue }) {
  const [resultImg, setresultImg] = useState('');
  
  function validateInput() {
    if(firstValue && secValue){
        setresultImg(firstValue)
    }    
  }

  useEffect(()=>{
    validateInput();
  },[firstValue,secValue]);

  return (
    <div>
    {resultImg && <img className='gameImg' style={{ marginLeft: 0 }} src={resultImg} alt="Result Image" />}
  </div>
  );
}
