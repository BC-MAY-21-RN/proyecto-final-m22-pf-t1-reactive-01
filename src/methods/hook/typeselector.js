import {useState} from 'react';

export const useSelectorType = () => {
  const [selectedType, setSelectType] = useState('undefine');

  return {selectedType, setSelectType};
};
