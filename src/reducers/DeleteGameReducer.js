const initialState = {
};

const DeleteGameReducer = (state = initialState, action) => {


	if(action.type == 'deleteGameSuccess') {

		alert("Jogo deletado");
}
	return state;
};

export default DeleteGameReducer;