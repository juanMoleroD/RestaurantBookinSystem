import React, { useEffect } from "react";
import Booking from "./Booking";
import Request from "../../helpers/request";
import { useState } from "react";

const BookingList = ({ bookings, deleteBooking }) => {

    const [filteredBookings, setFilteredBookings] = useState([]);

    const [filter, setFilter] = useState({
        filterDate: "",
        filterTimeFrom: "",
        filterTimeUpTo: ""
    });

    useEffect(() => {
        setFilteredBookings(bookings)
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
        let now = new Date();
        let dateFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...filter.filterTimeFrom.split(":"));
        let dateTo = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...filter.filterTimeUpTo.split(":"));
        const filteredArray = bookings.filter(booking => { return booking.date == filter.filterDate })
        const filteredDateTimeArray = filteredArray.filter(booking => {
            let bookingDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...booking.time.split(":"))
            return dateFrom <= bookingDate && bookingDate <= dateTo;
        })
        setFilteredBookings(filteredDateTimeArray);
    };

    const handleClear = (event) => {
        event.preventDefault()
        setFilteredBookings(bookings)
    }

    return (
        <>
            <h2>All bookings: </h2>
            <h3>Search</h3>
            <form className="filter-form" onSubmit={handleSubmit}>
                <label>Date</label>
                <input type="date" name="filterDate" value={filter.filterDate} onChange={handleChange} />
                <label>Between</label>
                <input type="time" name="filterTimeFrom" value={filter.filterTimeFrom} onChange={handleChange} />
                <label> and </label>
                <input type="time" name="filterTimeUpTo" value={filter.filterTimeUpTo} onChange={handleChange} />

                <button type="submit">Filter</button>
                <button onClick={handleClear}>Clear</button>
            </form>
            <table>
                <thead>
                    <tr className="">
                        <th><b>Booking ID</b></th>
                        <th> <b>Customer name</b> </th>
                        <th> <b>Table Number</b> </th>
                        <th> <b>Booking Date</b> </th>
                        <th> <b>Booking Time</b> </th>
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