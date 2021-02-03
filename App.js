import React from 'react';
import { View, StyleSheet } from 'react-native';

import CountProvider from './src/context/Count'

import Counter from './src/components/Counter'
import Mirror from './src/components/Mirror'


export default function App() {
  return (
    <CountProvider>
      <View style={styles.container}>
        <Counter/>
        <Mirror/>
      </View>
    </CountProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  }
});
