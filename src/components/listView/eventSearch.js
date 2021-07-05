import React, {useState} from "react";
import DateFnsUtils from '@date-io/date-fns';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Checkbox from '@material-ui/core/Checkbox';

export default function EventSearch(props) {
    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());
    const [startTimeChecked, setStartTimeChecked] = useState(false);
    const [endTimeChecked, setEndTimeChecked] = useState(false);

    function handleDateChange(event, selectedField) {
        if(selectedField === "startDate") {
            setStartTimeChecked(event.target.checked)
        } else if(selectedField === "endDate") {
            setEndTimeChecked(event.target.checked)
        } 
    }

    function searchVenue() {
        let searchParams = {
            "limit": 10
        }
        if(startTimeChecked) {
            searchParams["startsAt"] = selectedStartDate.toISOString()
        }
        if(endTimeChecked) {
            searchParams["endsAt"] = selectedEndDate.toISOString();
        }
        props.fetchEventsData(searchParams);
    }
    return(
        <div className="searchRowWrapper">
            <div className="dateFiltersWrapper">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="startDateFilterWrapper">
                        <div className="datefiltersHead">
                            <Checkbox
                                checked={startTimeChecked}
                                onChange={(e)=>handleDateChange(e, 'startDate')}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <label>Select Start Time</label>
                        </div>
                        
                        <DateTimePicker value={selectedStartDate} onChange={handleStartDateChange} />
                    </div>
                    <div className="endDateFilterWrapper">
                    <div className="datefiltersHead">
                            <Checkbox
                                checked={endTimeChecked}
                                onChange={(e)=>handleDateChange(e, 'endDate')}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            <label>Select End Time</label>
                        </div>
                        <DateTimePicker value={selectedEndDate} onChange={handleEndDateChange} />
                    </div>
                </MuiPickersUtilsProvider>
            </div>
            
            
            <div className="searchBtnWrapper">
                <button onClick={searchVenue}>Search</button>
            </div>
        </div>
    )
}