import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rowContainer: {
        width: '100%',
        padding: 15,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 10,
    },

    rowContainerLeft: {
        width: '80%',
    },

    rowContainerRight: {
        width: '20%',
    },

    rowContainerText: {
        fontSize: 20,
        color: 'white',
        textTransform: 'uppercase',
    },
})
