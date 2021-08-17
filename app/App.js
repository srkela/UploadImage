/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import type {Node} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App: () => Node = () => {

  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Welcome to my App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: "center",
    marginTop: 150,
  },
  title: {
    fontSize: 30,
  }
});

export default App;
