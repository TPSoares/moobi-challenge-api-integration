import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import NewConsoleReducer from './reducers/NewConsoleReducer';
import DeleteConsoleReducer from './reducers/DeleteConsoleReducer';
import UpdateConsoleReducer from './reducers/UpdateConsoleReducer';
import NewGameReducer from './reducers/NewGameReducer';
import DeleteGameReducer from './reducers/DeleteGameReducer';
import UpdateGameReducer from './reducers/UpdateGameReducer';
import GameReducer from './reducers/GameReducer';


const Reducers = combineReducers ({
	auth: AuthReducer,
	newConsole: NewConsoleReducer,
	deleteConsole: DeleteConsoleReducer,
	updateConsole: UpdateConsoleReducer,
	newGame: NewGameReducer,
	deleteGame: DeleteGameReducer,
	updateGame: UpdateGameReducer,
	game: GameReducer
});

export default Reducers;