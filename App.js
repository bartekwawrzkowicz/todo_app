import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
      <FlatList data={list} renderItem={position => {
        return (
          <>
            <View key={position.item.id} style={{ width: '100%', padding: 15, borderBottom: '2px', borderBottomColor: 'black', flexDirection: 'row', backgroundColor: 'red' }}>
              <View style={{ width: '80%' }}>
                <Text style={textStyle.firstContainer}>{position.item.text}</Text>
              </View>
              <View style={{ width: '20%' }}>
                <Text style={textStyle.firstContainer}>X</Text>
              </View>
            </View>


          </>
        )
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const textStyle = StyleSheet.create({
  firstContainer: {
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'white',
    justifyContent: 'center',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
