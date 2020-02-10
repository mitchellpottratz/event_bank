import * as types from "../actionTypes.js";


// sets the users latitude and longitude in the store
export const setUsersLocation = location => async dispatch => {
    console.log("set users location action");
    console.log('lat:', lat);
    console.log('lng:', lng);

    dispatch({
        type: types.SET_USERS_LOCATION,
        location: location
    })
} 

export const findEvent = async (data) => {
    // TODO
}





