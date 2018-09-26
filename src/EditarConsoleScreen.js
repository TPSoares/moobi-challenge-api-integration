import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import { connect } from 'react-redux';
import { updateConsoleIntoDatabase, changeName, changeCompany } from './actions/AuthAction';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';



export class EditarConsole extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Editar console'
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
				<FormLabel>Companhia</FormLabel>
				<FormInput placeholder={this.props.navigation.state.params.company} onChangeText = {(company) => this.props.changeCompany(company)} />

				<Button title='Editar' backgroundColor='green' onPress={() => this.props.updateConsoleIntoDatabase(this.props.navigation.state.params.id, this.props.name, this.props.company)} />
					
			</View>
		);
	}

	// updateDataIntoDatabase(id) {
	// 	fetch('http://10.0.1.182:3000/api/consoles/' + id, {
	// 		method: 'PUT',
	// 		headers: 
 //            {
 //                'Accept': 'application/json',
 //                'Content-Type': 'application/json',
 //            },
 //            body: JSON.stringify(
 //            {
 //              name : this.state.name,

 //              company : this.state.company,

 //            })

	// 	}).then((response) => response.json()).then((responseJsonFromServer) =>
 //            {
 //                alert('Console atualizado');
 				
 
 //            }).catch((error) =>
 //            {
 //                console.error(error);
 //            });
	// }


}

const mapStateToProps = (state) => {
	return {
		name: state.updateConsole.name,
		company: state.updateConsole.company
	};
};

const EditarConsoleConnect = connect(mapStateToProps, { updateConsoleIntoDatabase, changeName, changeCompany })(EditarConsole);
export default EditarConsoleConnect;