const initialState = {
};

const DeleteConsoleReducer = (state = initialState, action) => {


	if(action.type == 'deleteSuccess') {

		alert("Console deletado");
}
	return state;
};

export default DeleteConsoleReducer;