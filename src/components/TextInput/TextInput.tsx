import React from 'react';
import { TextInput } from 'react-native-paper';

interface ReusableInputProps {
    label: string;
    type: string;
    onChangeText: (text: string) => void;
}

const ReusableInput: React.FC<ReusableInputProps> = ({ label, type, onChangeText }) => {
  
  const [focused, setFocused] = React.useState(false);
  const [text, setText] = React.useState('');

  const handleTextChange = (value: string) => {
    if (type === 'url' && focused) {
      setText(value.startsWith('https://') ? value : `https://${value.toLowerCase()}`);
    } else {
      setText(value);
    }
    onChangeText(value);
  };

    return (
        <TextInput
            label={label}
            value={text}
            onChangeText={handleTextChange}
            secureTextEntry={type === 'password'}
            keyboardType={type === 'email' ? 'email-address' : type === 'tel' ? 'phone-pad' : 'default'}
            style={{ marginVertical: 10,  backgroundColor: 'rgba(244, 242, 248, 0.4)',
            borderRadius: 5,
            borderWidth: focused ? 1 : 0,
            borderColor: focused ? '#2f50c1' : 'transparent',}}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            theme={{ colors: { primary: '#2f50c1', text: '#A7A3B3' } }} 
            underlineColor="transparent"
            activeUnderlineColor="#2f50c1"
        />
    );
};

export default ReusableInput;
