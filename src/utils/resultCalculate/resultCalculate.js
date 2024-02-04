import React , { useState,useEffect }from 'react';
import RootStore from '../../store/rootStore.ts';

export default function Result({ firstValue,secValue,pngNameList}) {
  const [resultPng ,setResultPng ] = useState('');
  const [resultMessage ,setResultMessage ] = useState('');

  function resultCalculate(firstValue,secValue) {
    var z = 0;

    if (firstValue == secValue) {
      setResultMessage("Berabere kaldınız.");
      z++;
    }
    
    for (var j = 1; j < 8; j++) {
        if ((firstValue + j) % 14 == secValue) {
          setResultMessage("Kazanan: " + localStorage.getItem("firstUserName"));
          setResultPng(require(`../../assets/images/${pngNameList[firstValue]?.name }.png`));
          z++;
            break;
        }
    }
    if (z == 0) {
      setResultMessage("Kazanan: " + localStorage.getItem("SecondUserName"));
      setResultPng(require(`../../assets/images/${pngNameList[secValue]?.name }.png`));
    }

  }


  useEffect(()=>{
    resultCalculate(firstValue,secValue,pngNameList);
  },[firstValue,secValue,pngNameList]);

    return (
      <div>
        <span>{resultMessage}</span>
        { resultPng != '' && <img className='gameImg' style={{ marginLeft: -140 }} src={resultPng} alt="Result Image" />}
      </div>
    );
  
}
