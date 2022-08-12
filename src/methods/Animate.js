import React, {useEffect, useRef} from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native';

export default function Animate(type) {
  const animationRef = useRef < Lottie > null;

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <>
      {type === 'login'}
      <Lottie
        ref={animationRef}
        source={require('../assets/animations/login-an.json')}
      />
    </>
  );
}
