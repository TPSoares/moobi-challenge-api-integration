const initialState = {
	name: '',
	company: ''
};

const NewConsoleReducer = (state = initialState, action) => {


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

	if(action.type == 'insertSuccess') {
		alert("Cadastrado com sucesso");
	}

	return state;
};

export default NewConsoleReducer;