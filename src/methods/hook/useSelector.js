import {useState} from 'react';

export const useSelector = () => {
  const [selectedPet, setSelectedPet] = useState('undefine');
  const [selectedBreed, setSelectedBreed] = useState('undefine');

  return {selectedPet, selectedBreed, setSelectedPet, setSelectedBreed};
};
