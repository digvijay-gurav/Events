const EventReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SETEVENTSDATA':
            state = action.payload;
            return state;
        case 'GETEVENTSDATA':
            return state;
        default:
            return state;
    }
}
export default EventReducer;