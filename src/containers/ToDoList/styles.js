import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rowContainer: {
        width: '90%',
        padding: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row',
        backgroundColor: '#6682e5',
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
