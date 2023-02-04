import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
  },
  text: {
    color: 'white',
    fontSize: 28,
    margin: 20
  },
  input: {
    backgroundColor: '#1F1E25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginHorizontal: 20
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    margin: 20,
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

// Platform.OS permite testar qual sistema operacional está ativo, para realizar configurações específicas de ambiente.