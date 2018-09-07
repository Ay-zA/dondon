import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import colors from '../constants/colors';
import Header from '../components/Header';
import FarsiText from '../components/FarsiText';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.container}>

          <Image
            style={styles.stretch}
            source={require('../../assets/images/link.png')}
          />
          <FarsiText style={{ fontWeight: '100' }}>در حال حاضر در عضو زنجیره ای نیستید</FarsiText>
          <Text>در حال حاضر در عضو زنجیره ای نیستید</Text>
        </View>
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
