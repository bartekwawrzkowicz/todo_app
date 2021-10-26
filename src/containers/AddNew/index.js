import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const AddNew = () => {
    return (
        <View style={styles.addNewContainer}>
            <View style={styles.addNewContainerLeft}>
                <TextInput style={styles.addNewContainerTextInput} />
            </View>
            <View style={styles.addNewContainerRight}>
                <Button title={'Add'} onPress={() => { }} />
            </View>
        </View>
    );
}

export default AddNew;