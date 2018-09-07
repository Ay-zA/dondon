import React, { Component } from 'react';
import {
  StyleSheet, View, Image,
} from 'react-native';
import FarsiButton from '../components/FarsiButton';
import FarsiText from '../components/FarsiText';
import colors from '../constants/colors';
import { FontContext } from '../../FontProvider';

export default class HomeScreen extends Component {
  onAddChainPress = () => {
    const { navigate } = this.props.navigation;
    navigate('Chains');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>

          <Image
            style={styles.stretch}
            source={require('../../assets/images/link.png')}
          />
          <FarsiText style={{ marginVertical: 20, fontWeight: '100' }}>در حال حاضر در عضو زنجیره ای نیستید</FarsiText>
          <FarsiButton
            rightIcon={{ name: 'add' }}
            title="نمایش زنجیره"
            raised
            backgroundColor={colors.tintColor}
            onPress={this.onAddChainPress}
            buttonStyle={{ paddingLeft: 20, paddingRight: 10 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    // justifyContent: 'center',
  },
});
