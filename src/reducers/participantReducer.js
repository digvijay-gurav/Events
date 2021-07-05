const ParticipantReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SETPARTICIPANTDATA':
            state = action.payload;
            return state;
        case 'GETPARTICIPANTDATA':
            return state;
        default:
            return state;
    }
}
export default ParticipantReducer;