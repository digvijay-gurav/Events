import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import {useSelector} from "react-redux";
import "./detailedView.css";
import { participants, RootState, employees } from "../../types/interfaces";

const DetailedViewModal: React.FC<{handleClose: Function, open: boolean, data: participants}> = ({handleClose , open, data}) => {
    const participants = useSelector((state: RootState) => state.participants);

    function formatDate(date: Date) {
        const dateObj = new Date(date);
        const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        return formattedDate;
    }

    function displayEventDetailsMainInfo() {
        const displayDetailsData = data;
        if(displayDetailsData && displayDetailsData.position) {
            const eventsDetailHeader = <div className="eventDetailsHeaderRow">
                <div className="eventDetailsHeaderCell">{displayDetailsData.position.name}</div>
                <div className="eventDetailsHeaderCell">{formatDate(displayDetailsData.startsAt)}</div>
                <div className="eventDetailsHeaderCell">{formatDate(displayDetailsData.endsAt)}</div>
            </div>
        return eventsDetailHeader;
        }
        
    }
    function displayEventsDetails() {
        const displayDetailsData = data;
        if(displayDetailsData && displayDetailsData.employees && displayDetailsData.employees.length > 0) {
            let allEvents = (displayDetailsData.employees as any[]).map((eventItem: employees) => {
                return (
                    <div className="EventDetailsCellMain" key={eventItem.id}>
                        <div className="eventDetailsCell EventFirstName">{eventItem.firstName}</div>
                        <div className="eventDetailsCell eventLastName">{eventItem.lastName}</div>
                        <div className="eventDetailsCell eventAvatar">
                            <img src={eventItem.image} alt={eventItem.firstName} />
                        </div>
                    </div>
                );
            });
            const displayEventRow = <div className="eventDetailsContainer">{allEvents}</div>;
            return displayEventRow;
        } else {
            return <div className="nodata" onClick={handleClose()}>No Participant data available</div>;
        }
    }

    return (
        <Dialog onClose={handleClose()} aria-labelledby="open detailed view" open={open}>
            <div className="eventDetailsMainWrapper">
                <div>
                    {displayEventDetailsMainInfo()}
                </div>
                <div>
                    {displayEventsDetails()}
                </div>
            </div>
        </Dialog>
    )
}
export default DetailedViewModal;
