import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        React Native is ON!!!
      </Text>
    </SafeAreaView>
  );
}

