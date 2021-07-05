import React, { useState } from 'react';
import {useSelector} from "react-redux";
import "./listViewStyles.css";
import DetailedViewModal from "../detailedView/detailedViewModal";
import Dialog from '@material-ui/core/Dialog';
import { RootState, items } from "../../types/interfaces"


 const EventsListView:React.FC<{fetchEventsDetailsData: Function}> = ({fetchEventsDetailsData}) => {
    const events = useSelector((state: RootState) => state.events);
    const participants = useSelector((state: RootState) => state.participants);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    

    function formatDate(date: Date) {
        const dateObj = new Date(date);
        const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        return formattedDate;
    }

    function showEventDetails(eventItem: items) {
        fetchEventsDetailsData(eventItem.id)
        handleClickOpen();
    }

    function displayEventsData() {
        const displayEvents = events?.items;
        if(displayEvents && displayEvents.length > 0) {
            const eventsDataHeader = <div className="eventHeaderRow">
                <div className="eventDataHeaderCell">Position Name</div>
                <div className="eventDataHeaderCell">Start time</div>
                <div className="eventDataHeaderCell">End time</div>
            </div>
            let allEvents = (displayEvents as any []).map((eventItem: items, index: number) => {
                return (
                    <div className="EventCellMain" key={eventItem.id+index} onClick={()=>{showEventDetails(eventItem)}}>
                        <div className="EventName">{eventItem.position.name}</div>
                        <div className="eventStartTime">{formatDate(eventItem.startsAt)}</div>
                        <div className="eventEndTime">{formatDate(eventItem.endsAt)}</div>
                    </div>
                );
            });
            const displayEventRow = <div className="eventContainer">{eventsDataHeader}{allEvents}</div>;
            return displayEventRow;
        } else {
            return <div className="nodata">No Events</div>;
        }
    }


    return (
        <div className="mainWrapper">
            <div className="displayEventsMain">
                {displayEventsData()}
            </div>

            <DetailedViewModal handleClose={()=>handleClose} open={open} data={participants} />
        </div>
    )
}
export default EventsListView;
