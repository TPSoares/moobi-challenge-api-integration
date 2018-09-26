export const searchGame = () => {
    return (dispatch) => {
        fetch('http://10.0.1.182:3000/api/games')
            .then((response) => response.json())
            .then((json) => {
                // let state = this.state;
                // state.games = json.data;
                // this.setState(state);
                //alert('teste');
                let state = json.data;

                dispatch({
                    type: 'searchGames',
                    payload: {
                        games: state
                    }
                });
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
            });
    }
}

export const deleteGame = (id) => {


    return(dispatch) => {

        fetch('http://10.0.1.182:3000/api/games/' + id, {
            method: 'DELETE'
        }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                dispatch({
                    type:'deleteGameSuccess',
                });
                
 
            }).catch((error) =>
            {
               console.error(error);
            });
    };
}

export const inserirJogo = (name, consoleID, consoleName) => {
    return (dispatch) => {
        fetch('http://10.0.1.182:3000/api/games',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {

                  name: name,

                  console_id: consoleID,
 
                  console_name: consoleName,
 
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                dispatch({
                    type: 'insertGameSuccess'
                });
 
 
            }).catch((error) =>
            {
                console.error(error);
            });
    }
}

export const updateGameIntoDatabase = (id, name) => {
    return(dispatch) => {
        fetch('http://10.0.1.182:3000/api/games/' + id, {
            method: 'PUT',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
              name : name,
            })



        }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                dispatch({
                    type:'updateSuccess',
                    payload: {
                        name: name,
                    }
                });
                
 
            }).catch((error) =>
            {
                console.error(error);
            });
    };
        
}

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    };
};