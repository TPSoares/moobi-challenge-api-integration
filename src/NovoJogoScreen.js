import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from '../Styles';
import { connect } from 'react-redux';
import { changeName } from './actions/AuthAction';
import { inserirJogo } from './actions/GamesActions';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';


export class NovoJogo extends Component {

    constructor(props) {
        super(props);
 
        this.state = { 
            console_id: this.props.navigation.state.params.id,
            //name: '', 
            console_name: this.props.navigation.state.params.name,
            
          //ActivityIndicator_Loading: false, 
 
        }

        //this.inserirJogo = this.inserirJogo.bind(this);

    }

	static navigationOptions = ({navigation}) => ({
		title: 'Adicionar jogo'
	});

	
	render() {
		return(
            <View>
                <Text>Adicionar jogo para {this.state.console_name}</Text>

                <FormLabel>Nome</FormLabel>
                <FormInput placeholder="Inserir nome do jogo" onChangeText = {(name) => this.props.changeName(name)} />

                <Button title='Adicionar' backgroundColor='green' onPress={() => {this.props.inserirJogo(this.props.name ,this.props.navigation.state.params.id, this.props.navigation.state.params.name)}} />
                   
            </View>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        name: state.newGame.name,
    };
};

const NovoJogoConnect = connect(mapStateToProps, { inserirJogo, changeName })(NovoJogo);
export default NovoJogoConnect;