export const getEventsData = () => {
    return {
        type: "GETEVENTSDATA"
    }
}
export const setEventsData = (data) => {
    return {
        type: "SETEVENTSDATA",
        payload: data
    }
}
export const getParticipantData = () => {
    return {
        type: 'GETPARTICIPANTDATA'
    }
}
export const setParticipantData = (data) => {
    return {
        type: 'SETPARTICIPANTDATA',
        payload: data
    }
}