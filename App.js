import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddNew from './src/containers/AddNew';
import ToDoList from './src/containers/ToDoList';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [
        { id: 1, text: 'Let\'s' },
        { id: 2, text: 'start' },
        { id: 3, text: 'mobile coding' },
        { id: 4, text: 'with React Native' },
        { id: 5, text: 'by' },
        { id: 6, text: 'codeodrive' },
      ]
    }
  }

  render() {
    return (
      <View style={{ paddingTop: 50, marginBottom: 50, height: '100%', backgroundColor: 'black' }}>
        <ToDoList list={this.state.list} onDelete={itemId => {
          let list = [...this.state.list];
          let index = 0;

          list.forEach((item, itemIndex) => {
            if (item.id !== itemId) {
              return;
            }
            index = itemIndex;
            return false;
          })

          list.splice(index, 1);
          this.setState({ list })
        }} />

        <AddNew onPress={text => {
          let list = [...this.state.list];
          list.push({
            id: Math.random() + '',
            text,
          });

          this.setState({ list })
        }} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default function () {
  return <App />
}