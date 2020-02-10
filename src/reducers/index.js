import { combineReducers } from "redux";
import locationReducer from './location.js';
import eventsReducer from './events.js';

const rootReducer = combineReducers({
    location: locationReducer,
    events: eventsReducer
})

export default rootReducer;
