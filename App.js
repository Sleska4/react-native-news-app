import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigateMain from './navigations/navigations';

export default function App() {

  return (
    <NavigateMain/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
