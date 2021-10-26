import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const AddNew = () => {

    const [Text, setText] = useState('');

    const textChangeHandler = event => setText(event.target.value);

    return (
        <View style={styles.addNewContainer}>
            <View style={styles.addNewContainerLeft}>
                <TextInput style={styles.addNewContainerTextInput}
                    onChangeText={textChangeHandler}
                />
            </View>
            <View style={styles.addNewContainerRight}>
                <Button title={'Add'} onPress={() => { }} />
            </View>
        </View>
    );
}

export default AddNew;