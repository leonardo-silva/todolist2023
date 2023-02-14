import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Button } from '../../components/Button';

import { styles } from './styles';

interface TaskData {
  id: string;
  name: string;
}

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function handleAddNewTask() {
    const data: TaskData = {
      id: String((new Date).getTime()),
      name: newTask
    }
    setTasks(oldState => [...oldState, data]);
  }

  function handleRemoveTask(id: string) {
    setTasks(oldState => oldState.filter(
      task => task.id != id
    ))
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

      <Button
        onPress={handleAddNewTask}
        activeOpacity={0.7}
        title="Adicionar Tarefa"
      />
        
      <Text style={styles.text}>
        Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.buttonTask}
            onPress={() => handleRemoveTask(item.id)}
          >
            <Text style={styles.textTask}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

// TextInput para entrada de texto