import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'green',
    width: '50%',
    position: 'absolute',
    marginBottom: 20,
    bottom: 0,
  },
  add: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  consoleInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  consoleNome: {
    fontSize: 25,
    width: 150,
    height: 60,
    textAlign: 'center',
    paddingTop: 15
  },
  excluir: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  editar: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: 'yellow',
    borderRadius: 20
  },
  adicionarJogo: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: 'green',
    borderRadius: 20

  },
  gameList: {
    marginBottom: 80
  },
  gameInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  consoleOptions: {
    flexDirection: 'row',
  },
  formulario: {
    margin: 10,
    paddingBottom: 10,
    
  }

  
});
