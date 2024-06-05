import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScanScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ScanScreen</Text>
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

export default ScanScreen;
