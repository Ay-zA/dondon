import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: colors.tintColor,
  },
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Yebon Dobon</Text>
      </View>
    );
  }
}
