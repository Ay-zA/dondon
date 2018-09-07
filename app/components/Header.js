import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';
import colors from '../constants/colors';

const AppHeader = () => (
  <View style={styles.header}>
    <Header
      leftComponent={{ icon: 'menu', color: colors.tintText }}
      centerComponent={{ text: 'Yedon', style: { color: colors.tintText } }}
      rightComponent={{ icon: 'home', color: colors.tintText }}
    />
  </View>
);

const styles = {
  header: { width: '100%' },
};

export default AppHeader;
