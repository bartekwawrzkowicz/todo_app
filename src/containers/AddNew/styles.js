import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    addNewContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
    },

    addNewContainerLeft: {
        width: '80%',
    },

    addNewContainerRight: {
        width: '20%',
    },

    addNewContainerTextInput: {
        fontSize: 20,
        backgroundColor: '#ced5ee',
        textTransform: 'uppercase',
        marginLeft: 20,
        marginBottom: 20,
        height: 40,
        borderRadius: 10,
        padding: 10,
    },
})