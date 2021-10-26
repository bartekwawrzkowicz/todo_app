import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddNew from './src/containers/AddNew';
import ToDoList from './src/containers/ToDoList';

export default function App() {

  const list = [
    { id: 1, text: 'Let\'s' },
    { id: 2, text: 'start' },
    { id: 3, text: 'mobile coding' },
    { id: 4, text: 'with React Native' },
    { id: 5, text: 'by' },
    { id: 6, text: 'codeodrive' },
  ];

  return (
    <View style={{ paddingTop: 50, marginBottom: 50, height: '100%', backgroundColor: 'black' }}>
      <ToDoList list={list} />
      <StatusBar style="auto" />
      <AddNew />
    </View>
  );
}
