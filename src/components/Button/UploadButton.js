import {TouchableOpacity} from 'react-native';
import React from 'react';
import Upload from '../../assets/svg/upload.svg';
const UploadButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Upload widht={200} height={200} />
    </TouchableOpacity>
  );
};

export default UploadButton;
