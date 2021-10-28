import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';
import { addNewItem } from '../../actions';

class AddNew extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={styles.addNewContainer} >
                <View style={styles.addNewContainerLeft}>
                    <TextInput style={styles.addNewContainerTextInput}
                        onChangeText={text => this.setState({ text })
                        } placeholder="Add New Task"
                    />
                </View>
                <View style={styles.addNewContainerRight}>
                    <Button color="white" title={'Add'} onPress={() => this.props.addNewItem(this.state.text)
                    } />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addNewItem: text => dispatch(addNewItem(text))
});

export default connect(
    null,
    mapDispatchToProps
)(AddNew);
