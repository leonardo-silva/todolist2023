import { StatusBar } from 'react-native';
import React from 'react';

import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
