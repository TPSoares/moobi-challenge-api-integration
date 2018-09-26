const initialState = {
	name: '',
	company: ''
};

const UpdateConsoleReducer = (state = initialState, action) => {


	if(action.type == 'changeName') {
		return {
			...state,
			name:action.payload.name
		};
	}

	if(action.type == 'changeCompany') {
		return {
			...state,
			company:action.payload.company
		};
	}

	if(action.type == 'updateSuccess') {

		alert("Console atualizado");

		return {
			...state,
			name:action.payload.name,
			company:action.payload.company
		};
}
	return state;
};

export default UpdateConsoleReducer;