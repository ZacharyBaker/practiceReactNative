/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TestComponent from './TestComponent';

export default class practiceNative extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TestComponent />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

AppRegistry.registerComponent('practiceNative', () => practiceNative);
