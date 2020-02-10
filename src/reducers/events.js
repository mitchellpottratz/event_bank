import { ADD_EVENTS_TO_SHOW } from '../actionTypes.js';

const initialState = {
    toShow: [] // events to display on the map
}

const eventsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_EVENTS_TO_SHOW :
            console.log("SHOW_EVENTS called");
            return {
                ...state,
                toShow: action.events
            };

        default:
            return state;
    } 
}

export default eventsReducer;


