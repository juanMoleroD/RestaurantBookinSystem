import React, {useState} from "react";

const BookingAvailabilityFilter = ({bookings}) => {

    const [filter, setFilter] = useState({
        filterDate: "",
        filterTime: ""
    });

    const handleChange = (event) => {
        const propertyName = event.target.name
        const copyOfFilter = {... filter}
        copyOfFilter[propertyName] = event.target.value
        setFilter(copyOfFilter);
    }

    return(
        <>
            <form className="form" >
                <label>Date</label>
                <input type="date" name="filterDate" value={filter.filterDate} onChange={handleChange} required/>
                <label>Between</label>
                <input type="time" name="filterTime" value={filter.filterTime} onChange={handleChange} />
                <button type="submit">Filter</button>
                <button >Clear</button>
            </form>
        </>
    )
}

export default BookingAvailabilityFilter;