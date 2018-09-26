const initialState = {
	games: ''
};

const GameReducer = (state = initialState, action) => {


	if(action.type == 'searchGames') {
		return {
			...state,
			games:action.payload.games
		};
	}

	return state;
};

export default GameReducer;