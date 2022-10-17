import React, { useEffect } from "react";
import Booking from "./Booking";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const BookingList = ({ bookings, deleteBooking }) => {

    const [filteredBookings, setFilteredBookings] = useState([]);

    const [filter, setFilter] = useState({
        filterDate: "",
        filterTimeFrom: "",
        filterTimeUpTo: ""
    });

    useEffect(() => {
        setFilteredBookings(bookings);
    }, [bookings]);

    if (bookings.length === 0) {
        return <p> Loading... </p>
    }

    const bookingsNodes = filteredBookings.map((booking, index) => {
        return <Booking booking={booking} key={index} deleteBooking={deleteBooking} />
    })

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfFilter = { ...filter };
        copyOfFilter[propertyName] = event.target.value;
        setFilter(copyOfFilter);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let filteredArray = bookings.filter(booking => { return booking.date === filter.filterDate });
        
        if(filter.filterTimeFrom && filter.filterTimeUpTo) {
            let now = new Date();
            let timeFromInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...filter.filterTimeFrom.split(":"));
            let timeToInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...filter.filterTimeUpTo.split(":"));

            filteredArray = filteredArray.filter(booking => {
                let bookingDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...booking.time.split(":"));
                return (timeFromInDateFormat <= bookingDate && bookingDate <= timeToInDateFormat);
            })
        }
        setFilteredBookings(filteredArray);
    };

    const handleClear = (event) => {
        event.preventDefault();
        setFilteredBookings(bookings);
    }

    return (
        <>
            <h2 className="title">Bookings<FontAwesomeIcon icon={faCalendar} className="icon"/></h2>
            
            <form className="form" onSubmit={handleSubmit}>
                <label>Date</label>
                <input type="date" name="filterDate" value={filter.filterDate} onChange={handleChange} required/>
                <label>Between</label>
                <input type="time" name="filterTimeFrom" value={filter.filterTimeFrom} onChange={handleChange} />
                <label> and </label>
                <input type="time" name="filterTimeUpTo" value={filter.filterTimeUpTo} onChange={handleChange} />

                <button type="submit">Filter</button>
                <button onClick={handleClear}>Clear</button>
            </form>
            <table className="styled-table">
                <thead>
                    <tr className="table-columns">
                        <th><b>Booking ID</b></th>
                        <th> <b>Customer name</b> </th>
                        <th> <b>Table Number</b> </th>
                        <th> <b>Date</b> </th>
                        <th> <b>Time</b> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {bookingsNodes}
                </tbody>
            </table>
        </>
    )
}

export default BookingList;