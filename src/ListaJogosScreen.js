import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import Games from './Games';
import { connect } from 'react-redux';
import { searchGame } from './actions/GamesActions';

export class NovoJogo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//games: []
		}

		this.props.searchGame();

	}
    
	static navigationOptions = ({navigation}) => ({
		title: 'Lista de jogos'
	});
	
	render() {

		return(
           <View style={Styles.container}>
				<FlatList
					data={this.props.games}
					renderItem={({item}) => <Games data={item} navigation={this.props.navigation} />}
					keyExtractor={(item, index) => item.id}
				/>	
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		 games: state.game.games
	};
};

const NovoJogoConnect = connect(mapStateToProps, { searchGame })(NovoJogo);
export default NovoJogoConnect;