import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import Console from './Console';
import { connect } from 'react-redux';
import { searchConsoles } from './actions/AuthAction';


export class NovoConsole extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// consoles: []
		}

		
		this.props.searchConsoles();

		this.consoleName = this.consoleName.bind(this);
	}

	static navigationOptions = ({navigation}) => ({	
		title: 'Lista de Consoles'
	});

	consoleName() {
		this.props.navigation.navigate('NovoConsole', {
			console: this.state.console
		});
	}

	render() {

		if(this.props.consoles.length == 0) {
			return (
				<View style={Styles.container}>
					<Text>Nao ha consoles no momento</Text>

					<TouchableOpacity style={Styles.button} onPress={this.consoleName}>
		        		<Text style={Styles.add}>Adicionar console</Text>
		        	</TouchableOpacity>
				</View>
			);
		}

		return (
			<View style={Styles.container}>

				<FlatList
					style={Styles.gameList}
					data={this.props.consoles}
					renderItem={({item}) => <Console data={item} navigation={this.props.navigation} />}
					keyExtractor={(item, index) => item.id}

				/>

				
				<TouchableOpacity style={Styles.button} onPress={this.consoleName}>
		        	<Text style={Styles.add}>Adicionar console</Text>
		        </TouchableOpacity>
				
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		 consoles: state.auth.consoles
	};
};

const NovoConsoleConnect = connect(mapStateToProps, { searchConsoles })(NovoConsole);
export default NovoConsoleConnect;
	
