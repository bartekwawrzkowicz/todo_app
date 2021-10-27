import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class ToDoList extends React.Component {
    render() {

        return (
            <FlatList data={this.props.list} renderItem={position => {
                return (
                    <>
                        <View key={position.item.id} style={styles.rowContainer}>
                            <View style={styles.rowContainerLeft}>
                                <Text style={styles.rowContainerText} key={position.item.id}>{position.item.text}</Text>
                            </View>
                            <View style={styles.rowContainerRight}>
                                <TouchableOpacity onPress={() => {
                                    if (!this.props.onDelete) {
                                        return;
                                    } else {
                                        this.props.onDelete(position.item.id)
                                    }
                                }}>
                                    <Text style={styles.rowContainerText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                )
            }} />
        );
    }
}

export default ToDoList;