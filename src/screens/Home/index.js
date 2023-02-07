import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { styles } from './styles';

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask() {
    setTasks(oldState => [...oldState, newTask]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Olá, Leonardo
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite sua tarefa...'
        placeholderTextColor='#555555'
        onChangeText={setNewTask}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Text style={styles.buttonText}>
          Adicionar
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonTask}>
            <Text style={styles.textTask}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

// TextInput para entrada de texto