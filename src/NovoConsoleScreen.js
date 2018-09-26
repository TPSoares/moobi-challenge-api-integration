import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { insertDataIntoDatabase, changeName, changeCompany } from './actions/AuthAction';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import Styles from '../Styles';

export class Conversa extends Component {
	static navigationOptions = ({navigation}) => ({
		title: 'Adicionar Console'
	});

	constructor(props) {
        super(props);
 
        this.state = { 
 
        	// name: '', 
        	// company: '',
        	// loading: false 
          //ActivityIndicator_Loading: false, 
 
        }

       // this.insertDataIntoDatabase = this.insertDataIntoDatabase.bind(this);
    }

	render() {

		if(this.state.loading) {
			<View>
				<Text>Carregando...</Text>
			</View>
		}

		return (
			<View style={Styles.formulario}>
				<FormLabel>Nome</FormLabel>
				<FormInput placeholder="Entre com o nome do console" onChangeText = {(name) => this.props.changeName(name)} />
				<FormLabel>Companhia</FormLabel>
				<FormInput placeholder="Entre com o nome da companhia" onChangeText = {(company) => this.props.changeCompany(company)} />

				<Button backgroundColor='green' title='Adicionar' onPress={() => {this.props.insertDataIntoDatabase(this.props.name, this.props.company)}} />
				
			</View>
		);
	}

	// insertDataIntoDatabase () {
	// 	this.setState({loading: true}, () => {
	// 		fetch('http://10.0.1.182:3000/api/consoles',
 //            {
 //                method: 'POST',
 //                headers: 
 //                {
 //                    'Accept': 'application/json',
 //                    'Content-Type': 'application/json',
 //                },
 //                body: JSON.stringify(
 //                {
 //                  name : this.state.name,
 
 //                  company : this.state.company,
 
 //                })
 
 //            }).then((response) => response.json()).then((responseJsonFromServer) =>
 //            {
 //                alert(responseJsonFromServer);
 
 //                this.setState({ loading : false });
 
 //            }).catch((error) =>
 //            {
 //                console.error(error);
 //                this.setState({ loading : false});
 //            });
	// 	});

		
	// }
}

const mapStateToProps = (state) => {
	return {
		name: state.newConsole.name,
		company: state.newConsole.company
	};
};

const ConversaConnect = connect(mapStateToProps, { insertDataIntoDatabase, changeName, changeCompany })(Conversa);
export default ConversaConnect;