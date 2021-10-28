import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions';

class ToDoList extends React.Component {
    render() {

        return (
            <FlatList data={this.props.list} renderItem={item => {
                return (
                    <>
                        <View style={styles.rowContainer}>
                            <View style={styles.rowContainerLeft}>
                                <Text style={styles.rowContainerText} key={item.item.id}>{item.item.text}</Text>
                            </View>
                            <View style={styles.rowContainerRight}>
                                <TouchableOpacity onPress={() => {
                                    this.props.deleteItem(item.item.id)
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

const mapStateToProps = state => ({
    list: state.todoList
});

const mapDispatchToProps = dispatch => ({
    deleteItem: id => dispatch(deleteItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);