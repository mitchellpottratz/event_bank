import * as types from "../actionTypes.js";


// sets the users latitude and longitude in the store
export const setUsersLocation = location => async dispatch => {
    console.log("set users location action");
    console.log('lat:', location.lat);
    console.log('lng:', location.lng);

    dispatch({
        type: types.SET_USERS_LOCATION,
        location: location
    })
}

// adds events to show on the map 
export const addEventsToShow = () => dispatch => {
    
}





