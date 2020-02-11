import { SET_USERS_LOCATION } from '../actionTypes.js';

const initialState = {
    lat: 0,
    lng: 0
}

const locationReducer = (state=initialState, action) => {
    switch (action.type) {

        case SET_USERS_LOCATION:
            console.log("SET_USERS_LOCATION reducer");
            console.log('location in reducer:', action.location);
            return {
                lat: action.location.lat,
                lng: action.location.lng
            }
        
        default:
            return state
    }
}

export default locationReducer;


