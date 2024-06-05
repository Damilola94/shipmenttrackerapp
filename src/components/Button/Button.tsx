import React from 'react';
import {Dimensions} from 'react-native';
import {Button} from 'react-native-paper';

interface LoginButtonProps {
  onPress: () => void;
  label: string;
  color: string;
  labelColor: string;
  disabled: boolean
}

const CustomButton: React.FC<LoginButtonProps> = ({
  onPress,
  label,
  color,
  labelColor,
  disabled
}) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={{marginVertical: 10, borderRadius: 5,}}
      theme={{colors: {primary: color, text: '#2f50c1', accent: '#2f50c1'}}}
      disabled={disabled}
      labelStyle={{color: labelColor}}>
      {label}
    </Button>
  );
};

export default CustomButton;
