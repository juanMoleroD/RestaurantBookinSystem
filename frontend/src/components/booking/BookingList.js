import React from "react";
import Booking from "./Booking";


const BookingList = ({ bookings }) => {

    if (bookings.length === 0) {
        return <p> Loading... </p>
    }

    const bookingsNodes = bookings.map((booking, index) => {
        return <Booking booking={booking} key={index} />
    })

    return (
        <>
            <table>
                <thead className="">
                    <th><b>Booking ID</b></th>
                    <th> <b>Customer name</b> </th>
                    <th> <b>Table Number</b> </th>
                    <th> <b>Booking Date</b> </th>
                    <th> <b>Booking Time</b> </th>
                    <th> <b>Update</b> </th>
                </thead>
                <tbody>
                    {bookingsNodes}
                </tbody>
            </table>
        </>
    )
}

export default BookingList;