import React, {useState} from "react";

const BookingAvailabilityFilter = ({newBooking, setNewBooking, handleFilterSubmit, handleClear}) => {

    
    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfNewBooking = {... newBooking};
        copyOfNewBooking[propertyName] = event.target.value;
        setNewBooking(copyOfNewBooking);
    }

    const handleFilter = (event) => {
        event.preventDefault();
        handleFilterSubmit()
    }

    return(
        <div>
        <br></br>
            <form className="form" onSubmit={handleFilter}>
                <label><b>Date</b></label>
                <input type="date" name="date" value={newBooking.date} onChange={handleChange} required/>
                <label><b>Time</b></label>
                <input type="time" name="time" value={newBooking.time} onChange={handleChange} />
                <button type="submit">Filter</button>
                <button onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}

export default BookingAvailabilityFilter;