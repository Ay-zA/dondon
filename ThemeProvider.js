/* eslint-disable react/no-multi-comp */
import React, { Component, Children } from 'react';
import { Font } from 'expo';
import PropTypes from 'prop-types';

export class FontProvider extends Component {
  static childContextTypes = {
    isLoaded: PropTypes.bool.isRequired,
  }

  state = {
    isLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'iran-sans-bold': require('./assets/fonts/IRANSansMobile_Bold.ttf'),
      'iran-sans-light': require('./assets/fonts/IRANSansMobile_Light.ttf'),
      'iran-sans-medium': require('./assets/fonts/IRANSansMobile_Medium.ttf'),
    });

    this.setState({ isLoaded: true });
  }

  getChildContext() {
    const isLoaded = this.state;
    return isLoaded;
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

const withFont = ComponentToWrap => class fontComponent extends Component {
    static contextTypes = {
      isLoaded: PropTypes.bool.isRequired,
    }

    render() {
      const { isLoaded } = this.context;
      return (
        <ComponentToWrap {...this.props} isLoaded={isLoaded} />
      );
    }
};
export default withFont;
