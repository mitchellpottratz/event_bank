

const initialState = {
    toShow: [] // events to display on the map
}

const eventsReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SHOW_EVENTS":
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


