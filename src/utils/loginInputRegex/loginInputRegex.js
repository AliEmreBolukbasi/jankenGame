import React , { useState,useEffect }from 'react';

export default function LoginInputRegex({ value, onValidationChange }) {
  const [errorMessage,setErrorMessage] = useState('');

  function validateInput() {
    if (!checkUserName(value)) {
      setErrorMessage('Bu alan 1 Büyük harf ve 4-12 arasında karakter içermelidir.');
      onValidationChange(false);
    }else{
      setErrorMessage('');
      onValidationChange(true);
    }
  }

  // Regular expression to check the username format
  function checkUserName(str) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{4,12}$/;
    return re.test(str);
  }

  useEffect(()=>{
    validateInput();
  },[value]);

  return (
    <div className='errorMessageBox'>
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
}
