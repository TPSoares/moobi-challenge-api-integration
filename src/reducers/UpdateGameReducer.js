const initialState = {
	name: '',
};

const UpdateConsoleReducer = (state = initialState, action) => {


	if(action.type == 'changeName') {
		return {
			...state,
			name:action.payload.name
		};
	}


	if(action.type == 'updateSuccess') {

		alert("Jogo atualizado");

		return {
			...state,
			name:action.payload.name,
		};
}
	return state;
};

export default UpdateConsoleReducer;