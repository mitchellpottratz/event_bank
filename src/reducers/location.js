import { SET_USERS_LOCATION } from '../actionTypes.js';

const initialState = {
    lat: 0,
    lng: 0
}


const locationReducer = (state=initialState, action) => {
    switch (action.type) {

        case SET_USERS_LOCATION:
            return {
                ...state,
                lat: action.lat,
                lng: action.lng
            }
    }

}


