import React, { Component } from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';
import FarsiButton from '../components/FarsiButton';
import FarsiText from '../components/FarsiText';
import colors from '../constants/colors';
import { FontContext } from '../../FontProvider';
import Header from '../components/Header';

export default class HomeScreen extends Component {
  onAddChainPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Chains');
  }

  render() {
    return (
      <View style={styles.outer}>
        <Header />

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/battery.png')}
            resizeMode="contain"
          />
          <FarsiText style={{ marginVertical: 20, fontWeight: '100' }}>شارژ کیف پول</FarsiText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  image: {
    width: 96,
  },
});
