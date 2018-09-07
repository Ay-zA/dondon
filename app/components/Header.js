import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';
import colors from '../constants/colors';
import FarsiText from './FarsiText';

const AppHeader = () => (
  <View style={styles.header}>
    <Header
      backgroundColor={colors.tintColor}
      centerComponent={<FarsiText style={styles.heading}>یه بن دو بن</FarsiText>}
    />
  </View>
);

const styles = {
  header: { width: '100%' },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 8,
    color: colors.tintText,
  },
};

export default AppHeader;
