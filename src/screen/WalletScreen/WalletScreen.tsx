import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WalletScreen = () => {
  return (
    <View style={styles.root}>
      <Text>WalletScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletScreen;
