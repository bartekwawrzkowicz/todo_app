import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';

const ToDoList = props => {
    return (
        <FlatList data={props.list} renderItem={position => {
            return (
                <>
                    <View key={position.item.id} style={styles.rowContainer}>
                        <View style={styles.rowContainerLeft}>
                            <Text style={styles.rowContainerText}>{position.item.text}</Text>
                        </View>
                        <View style={styles.rowContainerRight}>
                            <Text style={styles.rowContainerText}>X</Text>
                        </View>
                    </View>
                </>
            )
        }} />
    );
}

export default ToDoList;