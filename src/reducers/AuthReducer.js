const initialState = {
	consoles: ''
};

const AuthReducer = (state = initialState, action) => {


	if(action.type == 'searchConsoles') {
		return {
			...state,
			consoles:action.payload.consoles
		};
	}

	return state;
};

export default AuthReducer;