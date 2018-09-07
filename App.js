import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './app/screens/Home';
import colors from './app/constants/colors';
import { FontProvider } from './ThemeProvider';

const Navigation = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Other: HomeScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = 'home';
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Other') {
          iconName = 'cog';
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
        backgroundColor: colors.tabBar,
      },
    },
    initialRouteName: 'Home',
  },
);

export default class App extends Component {
  render() {
    return (
      <FontProvider>
        <Navigation />
      </FontProvider>
    );
  }
}
