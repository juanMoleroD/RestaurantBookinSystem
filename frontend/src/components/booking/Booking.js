import React from "react";
import '../booking/booking.css'

const Booking = ({ booking }) => {

    return (
        <tr>
            <td>{booking.id}</td>
            <td>{booking.customer.name}</td>
            <td>{booking.tableNumber}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td><button><a className="update-link" href={'/bookings/' + booking.id + '/edit'} >Update</a></button></td>
            {/* <td></td> */}
        </tr>
    )
}

export default Booking;