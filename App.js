import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { View, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './app/screens/Home';
import ChainsScreen from './app/screens/Chains';
import colors from './app/constants/colors';
import FontProvider from './FontProvider';
import Header from './app/components/Header';

const Navigation = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Chains: ChainsScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Chains':
            iconName = 'link';
            break;
          default:
            iconName = '';
        }
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.tabIconSelected,
      inactiveTintColor: colors.tabIconDefault,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: colors.tintColor,
      },
    },
    initialRouteName: 'Home',
  },
);

export default class App extends Component {
  render() {
    const paddingTop = (Platform.OS === 'ios') ? 0 : StatusBar.currentHeight;
    return (
      <View style={{ paddingTop, flex: 1 }}>
        <FontProvider>
          <Header />
          <Navigation />
        </FontProvider>
      </View>
    );
  }
}
