import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { getEventsService, getEventDetailsService } from "../../services/getEventsService";
import EventSearch from "./eventSearch";
import EventsListView from "./eventsListView";
import { setEventsData, setParticipantData } from "../../actions";
import Pagination from "../pagination";

function EventsMainComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState(null);
    const dispatch = useDispatch();

    function fetchEventsData(params) {
        getEventsService(params).then(res => {
            dispatch(setEventsData(res.data));
            setPagination(res.data.pagination.count);
        }).catch(err => console.log(err));
        
    }

    function fetchEventsDetailsData(id) {
        getEventDetailsService(id).then(res => {
            dispatch(setParticipantData(res.data))
        }).catch(err => console.log(err));
    }
    return (
        <div>
            <h3>Events</h3>
            <EventSearch fetchEventsData={fetchEventsData}></EventSearch>
            <EventsListView fetchEventsDetailsData={fetchEventsDetailsData}></EventsListView>
            <Pagination pagination={pagination} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchEventsData={fetchEventsData}></Pagination>
        </div>
    )
}

export default EventsMainComponent;
