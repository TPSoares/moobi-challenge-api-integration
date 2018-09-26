export const searchConsoles = () => {
	return (dispatch) => {
		search(dispatch);
};
}

const search = (dispatch) => {
	fetch('http://10.0.1.182:3000/api/consoles')
			.then((response) => response.json())
			.then((json) => {
				// let state = this.state;
				// state.consoles = json.data;
				// this.setState(state);
				// alert('teste');
				let state = json.data;

				dispatch({
					type: 'searchConsoles',
					payload: {
						consoles: state
					}
				});
			})
			.catch(function(error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				 // ADD THIS THROW error
				  throw error;
			});
}

export const insertDataIntoDatabase = (name, company) => {
	return (dispatch) => {
		fetch('http://10.0.1.182:3000/api/consoles',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {

              name : name,

              company : company,

            })

        }).then((response) => response.json()).then((responseJsonFromServer) =>
        {
           // alert(responseJsonFromServer);
          	search(dispatch);
            dispatch({
            	type: 'insertSuccess'
            });

          
        }).catch((error) =>
        {
            console.error(error);
        });
	};
};

export const changeName = (name) => {
	return {
		type: 'changeName',
		payload: {
			name: name
		}
	};
};

export const changeCompany = (company) => {
	return {
		type: 'changeCompany',
		payload: {
			company: company
		}
	};
};

export const deleteConsole = (id) => {
	return(dispatch) => {

		fetch('http://10.0.1.182:3000/api/consoles/' + id, {
			method: 'DELETE'
		}).then((response) => response.json()).then((responseJsonFromServer) =>
            {
            	search(dispatch);
                dispatch({
                	type:'deleteSuccess',
                });
 				
 
            }).catch((error) =>
            {
               console.error(error);
            });
	};
		
}

export const updateConsoleIntoDatabase = (id, name, company) => {
	return(dispatch) => {
		fetch('http://10.0.1.182:3000/api/consoles/' + id, {
			method: 'PUT',
			headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
              name : name,

              company : company,

            })



		}).then((response) => response.json()).then((responseJsonFromServer) =>
            {
            	search(dispatch);
	         	dispatch({
	            	type:'updateSuccess',
	            	payload: {
	            		name: name,
	            		company: company
	            	}
	            });
 				
 
            }).catch((error) =>
            {
                console.error(error);
            });
	};
		
}