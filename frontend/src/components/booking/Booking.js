import React from "react";
import '../booking/booking.css'
import Request from "../../helpers/request";

const Booking = ({ booking, deleteBooking }) => {


    const handleDelete = () =>{
        const request = new Request();
        request.delete('/api/bookings/' + booking.id)
        deleteBooking(booking.id)
        
        
    }

    return (
        <tr>
            <td>{booking.id}</td>
            <td>{booking.customer.name}</td>
            <td>{booking.tableNumber}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td><button><a className="update-link" href={'/bookings/' + booking.id + '/edit'} >Update</a></button></td>
            <td><button onClick={handleDelete}>Delete</button></td>
            
            {/* <td></td> */}
        </tr>
    )
}

export default Booking;