/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Font } from 'expo';

export const FontContext = React.createContext('isLoaded');

export default class FontProvider extends Component {
  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'iran-sans-bold': require('./assets/fonts/IRANSansMobile_Bold.ttf'),
      'iran-sans-light': require('./assets/fonts/IRANSansMobile_Light.ttf'),
      'iran-sans': require('./assets/fonts/IRANSansMobile_Medium.ttf'),
    });

    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <FontContext.Provider value={this.state.isLoaded}>
        {this.props.children}
      </FontContext.Provider>
    );

    // `Children.only` enables us not to add a <div /> for nothing
  }
}
