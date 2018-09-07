import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { FontContext } from '../../FontProvider';

class FarsiText extends Component {
  getFontFamily= (weight) => {
    if (!weight) {
      return 'iran-sans';
    }

    if (weight === 'bold' || Number.isInteger(Number(weight)) && weight > 300) {
      return 'iran-sans-bold';
    }

    if (Number.isInteger(Number(weight)) && weight < 200) {
      return 'iran-sans-light';
    }

    return 'iran-sans';
  }

  render() {
    const { style, ...rest } = this.props;

    return (
      <FontContext.Consumer>
        {isLoaded => (
          <Text
            style={{
              fontFamily: isLoaded
                ? this.getFontFamily(style && style.fontWeight)
                : undefined,
              ...style,
              fontWeight: '200',
            }}
            {...rest}
          />
        )}
      </FontContext.Consumer>
    );
  }
}

FarsiText.contextTypes = {
  isLoaded: PropTypes.bool,
};

export default FarsiText;
