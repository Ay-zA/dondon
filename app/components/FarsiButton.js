
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { FontContext } from '../../FontProvider';

class FarsiButton extends Component {
  render() {
    const { style, ...rest } = this.props;

    return (
      <FontContext.Consumer>
        {isLoaded => (
          <Button
            fontFamily={isLoaded ? 'iran-sans-light' : null}
            {...rest}
          />
        )}
      </FontContext.Consumer>
    );
  }
}

export default FarsiButton;
