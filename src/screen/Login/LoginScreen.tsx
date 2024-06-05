import React, { useState, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';

import ReusableInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import LoginButton from '../../components/Button';

import Logo from '../../../assets/logo/logo.png';

const { width, height } = Dimensions.get('window');

const LoginForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();

  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const snapPoints = useMemo(() => ['92%'], []);

  const showModal = () => {
    setVisible(true);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const hideModal = () => {
    setVisible(false);
    bottomSheetRef.current?.close();
  };

  const handleLogin = () => {
    if (isFormValid) {
      hideModal();
      navigation.navigate('Home');
    }
  };

  const validateForm = () => {
    if (url && email && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
    setter(value);
    validateForm();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.blueScreen}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={Logo} style={{ height: height * 0.3 }} resizeMode="contain" />
        </View>
        <View style={styles.footer}>
          <LoginButton onPress={showModal} label="Login" color="white" labelColor="#2f50c1" />
        </View>
      </View>
      {visible && (
        <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} onClose={() => setVisible(false)}>
          <View style={styles.root}>
            <BackButton onPress={hideModal} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>
              Please enter your First, Last name and your phone number in order to register.
            </Text>
            <ReusableInput label="URL" type="url" onChangeText={handleInputChange(setUrl)} />
            <ReusableInput label="Username / Email" type="email" onChangeText={handleInputChange(setEmail)} />
            <ReusableInput label="Password" type="password" onChangeText={handleInputChange(setPassword)} />
          </View>
          <View style={styles.footer}>
            <LoginButton
              onPress={handleLogin}
              label="Login"
              color={isFormValid ? '#2f50c1' : '#eae7f2'}
              labelColor={isFormValid ? "white" : "#a7a3b3"}
              disabled={!isFormValid}
            />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  footer: {
    padding: 16,
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 20,
    color: '#757281',
  },
  blueScreen: {
    flex: 1,
    width,
    height,
    backgroundColor: '#2f50c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginForm;
