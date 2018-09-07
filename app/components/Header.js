import React from 'react';
import { Header } from 'react-native-elements';
import { View } from 'react-native';
import colors from '../constants/colors';
import withFont from '../../ThemeProvider';

const AppHeader = ({ isLoaded }) => (
  <View style={styles.header}>
    <Header
      centerComponent={{
        text: 'یه بن دو بن',
        style: {
          fontFamily: isLoaded ? 'iran-sans-bold' : undefined,
          fontSize: 18,
          fontWeight: 'bold',
          color: colors.tintText,
        },
      }}
    />
  </View>
);

const styles = {
  header: { width: '100%' },
};

export default withFont(AppHeader);
