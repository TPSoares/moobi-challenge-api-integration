/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import TelaInicial from './src/TelaInicial';
import NovoConsoleScreen from './src/NovoConsoleScreen';
import EditarConsoleScreen from './src/EditarConsoleScreen';
import NovoJogoScreen from './src/NovoJogoScreen';
import ListaJogosScreen from './src/ListaJogosScreen';
import EditarGameScreen from './src/EditarGameScreen';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './src/Reducers';
import ReduxThunk from 'redux-thunk';


let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator ({
  Home: {
    screen: TelaInicial
  },
  NovoConsole: {
    screen: NovoConsoleScreen
  },
  EditarConsole: {
    screen: EditarConsoleScreen
  },
  NovoJogo: {
    screen: NovoJogoScreen
  },
  ListaJogos: {
    screen: ListaJogosScreen
  },
  EditarGame: {
    screen: EditarGameScreen
  }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}


