import React, { Component } from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import FarsiText from '../components/FarsiText';

export default class ChainsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FarsiText>ChainsScreen</FarsiText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
