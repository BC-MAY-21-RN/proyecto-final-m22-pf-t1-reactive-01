import {useState} from 'react';

export const useCard = () => {
  const [number, setnumber] = useState('1111 1111 1111 1111');
  const [expery, setexpery] = useState('01/01');
  const [code, setcode] = useState('111');

  const onChange = (text, inputType) => {
    /*if (inputType === 'cardNumber') {
      setnumber(text);
    }
    if (inputType === 'expiry') {
      setexpery(text);
    }
    if (inputType === 'code') {
      setcode(text);
    }*/
    setnumber(text);
  };

  const valuePlaceholder = inputType => {
    if (inputType === 'cardNumber') {
      return '4242 4242 4242 4242';
    }
    if (inputType === 'expiry') {
      return '22/23';
    }
    if (inputType === 'code') {
      return '22/23';
    }
  };
  return {number, expery, code, onChange, valuePlaceholder, setnumber};
};
