import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },

  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary,
  },
});

const Button = ({
                         onPress = () => {},
                         children = '',
                         outline = false,
                       }) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  return (
      <TouchableOpacity onPress={onPress} style={containerStyles}>
        <Text style={textStyles}>{children}</Text>
      </TouchableOpacity>
  );
};

export default Button;
