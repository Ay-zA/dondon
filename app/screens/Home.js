import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';
import Header from '../components/Header';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Yebon Dobon 5</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    color: colors.tintColor,
  },
});
