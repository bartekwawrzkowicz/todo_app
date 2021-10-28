import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AddNew from './../AddNew';
import ToDoList from '../../containers/ToDoList';
import { styles } from './styles';


class App extends React.Component {

    render() {
        return (
            <View style={styles.appWrapper}>
                <ToDoList />
                <AddNew />
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default App;