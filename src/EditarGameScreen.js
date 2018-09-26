import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import { connect } from 'react-redux';
import { updateGameIntoDatabase, changeName } from './actions/GamesActions';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export class EditarGame extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Editar Game'
	});

	constructor(props) {
        super(props);
 
        this.state = { 
 
        	// name: this.props.navigation.state.params.name, 
        	// company: this.props.navigation.state.params.name
        	
          //ActivityIndicator_Loading: false, 
 
        }

        // this.updateDataIntoDatabase = this.updateDataIntoDatabase.bind(this);
    }

	render() {

		return(
			<View>
				<FormLabel>Nome</FormLabel>
				<FormInput placeholder={this.props.navigation.state.params.name} onChangeText = {(name) => this.props.changeName(name)} />
				
				<Button title='Editar' backgroundColor='green' onPress={() => {this.props.updateGameIntoDatabase(this.props.navigation.state.params.id, this.props.name)}} />
					
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: state.updateGame.name,
	};
};

const EditarGameConnect = connect(mapStateToProps, { updateGameIntoDatabase, changeName })(EditarGame);
export default EditarGameConnect;