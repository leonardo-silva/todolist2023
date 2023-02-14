import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}