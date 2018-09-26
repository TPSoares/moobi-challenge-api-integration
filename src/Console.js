import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, FlatList, Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import { connect } from 'react-redux';
import { deleteConsole } from './actions/AuthAction';
import { Icon } from 'react-native-elements';


export class Console extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.data.id,
			name: this.props.data.name,
			company: this.props.data.company,
			games: this.props.data.games
		};

		this.editConsole = this.editConsole.bind(this);
		this.novoJogo = this.novoJogo.bind(this);
		this.gameList = this.gameList.bind(this);

	}

	render() {
		return(

			<View style={Styles.consoleInfo}>

				<TouchableOpacity onPress={this.gameList}>
					<Text style={Styles.consoleNome}>{this.props.data.name}</Text>
				</TouchableOpacity>
				<View style={Styles.consoleOptions}>
					<Icon containerStyle={{padding: 20}} size={30} name='plus' type='font-awesome' color='green' onPress={this.novoJogo} />
					<Icon containerStyle={{padding: 20}} size={30} name='edit' type='font-awesome' onPress={this.editConsole} />
					<Icon containerStyle={{padding: 20}} size={30} name='times-circle' type='font-awesome' color='red' onPress={() => {this.props.deleteConsole(this.state.id)}} />
				</View>
	        </View>
		);
	}

	gameList() {
		this.props.navigation.navigate('ListaJogos', {
			console: this.state.console,
		});
	}


	editConsole() {
		this.props.navigation.navigate('EditarConsole', {
			id: this.state.id,
			name: this.state.name,
			company: this.state.company
		});
	}

	novoJogo() {
		this.props.navigation.navigate('NovoJogo', {
			id: this.state.id,
			name: this.state.name,
			company: this.state.company,
			games: this.state.games
		});
	}
}

const mapStateToProps = (state) => {
	return {
	};
};

const ConsoleConnect = connect(mapStateToProps, { deleteConsole })(Console);
export default ConsoleConnect;

