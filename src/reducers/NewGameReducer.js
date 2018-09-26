const initialState = {
	name: '',
};

const NewGameReducer = (state = initialState, action) => {


	if(action.type == 'changeName') {
		return {
			...state,
			name:action.payload.name
		};
	}

	if(action.type == 'insertGameSuccess') {
		alert("Jogo cadastrado com sucesso");
	}

	return state;
};

export default NewGameReducer;