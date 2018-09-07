import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';
import colors from '../constants/colors';
import FarsiText from './FarsiText';

const AppHeader = props => (
  <View style={styles.header}>
    <Header
      backgroundColor={colors.tintColor}
      centerComponent={<FarsiText style={styles.heading}>{ props.title || 'یه بن دو بن'}</FarsiText>}
      {...props}
    />
  </View>
);

const styles = {
  header: { width: '100%' },
  heading: {
    fontSize: 16,
    // paddingBottom: 8,
    color: colors.tintText,
  },
};

export default AppHeader;
