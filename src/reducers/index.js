import EventReducer from "./eventDataReducer";
import ParticipantReducer from "./participantReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    events: EventReducer,
    participants: ParticipantReducer
});

export default allReducers;