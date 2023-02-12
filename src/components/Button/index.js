import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Button({ title, ...rest }) {
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