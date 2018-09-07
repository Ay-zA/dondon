
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { FontContext } from '../../FontProvider';
import colors from '../constants/colors';

class FarsiButton extends Component {
  render() {
    const { style, ...rest } = this.props;

    return (
      <FontContext.Consumer>
        {isLoaded => (
          <Button
            fontFamily={isLoaded ? 'iran-sans-light' : null}
            backgroundColor={colors.tintColor}
            {...rest}
          />
        )}
      </FontContext.Consumer>
    );
  }
}

export default FarsiButton;
