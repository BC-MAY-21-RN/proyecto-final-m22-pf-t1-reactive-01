import React from 'react';
import {useState} from 'react';

export const useMoveCard = () => {
  const viewRef = React.useRef(0);
  const [flipType, setFlip] = useState('front');
  const onFrontPress = () => {
    setFlip('front');
    if (flipType !== 'front') {
      viewRef.current.flipLeft();
    }
  };
  const onBackPress = () => {
    setFlip('back');
    if (flipType !== 'back') {
      viewRef.current.flipRight();
    }
  };
  return {viewRef, setFlip, onFrontPress, onBackPress};
};
