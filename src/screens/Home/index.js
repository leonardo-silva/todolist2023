import React from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Olá, Leonardo
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite sua tarefa...'
        placeholderTextColor='#555555'
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          Adicionar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// TextInput para entrada de texto