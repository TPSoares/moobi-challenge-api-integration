import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import { connect } from 'react-redux';
import { deleteGame } from './actions/GamesActions';
import { Icon } from 'react-native-elements';


export class Games extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.data.id,
			name: this.props.data.name,
			console_id: this.props.data.console_id,
			console_name: this.props.data.console_name
		};

		this.editGame = this.editGame.bind(this);
		this.novoJogo = this.novoJogo.bind(this);
		this.gameList = this.gameList.bind(this);
	}

	render() {

		return(
			<View style={Styles.gameInfo}>
				<Text style={Styles.consoleName}>{this.props.navigation.state.params.name}</Text>
				<Text style={Styles.consoleNome}>{this.state.name}</Text>

				<Icon containerStyle={{padding: 20}} size={30} name='edit' type='font-awesome' onPress={this.editGame} />
				<Icon containerStyle={{padding: 20}} size={30} name='times-circle' type='font-awesome' color='red' onPress={() => {this.props.deleteGame(this.state.id)}} />
	        </View>
		);
	}

	gameList() {
		this.props.navigation.navigate('ListaJogos', {
			console: this.state.console
		});
	}

	editGame() {
		this.props.navigation.navigate('EditarGame', {
			id: this.state.id,
			name: this.state.name,
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

const GamesConnect = connect(mapStateToProps, { deleteGame })(Games);
export default GamesConnect;

