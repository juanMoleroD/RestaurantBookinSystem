import React from "react";
import '../booking/booking.css'
import Request from "../../helpers/request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Booking = ({ booking, deleteBooking }) => {


    const handleDelete = () =>{
        const request = new Request();
        request.delete('/api/bookings/' + booking.id)
        deleteBooking(booking.id)
        
        
    }

    return (
        <tr className="table-rows">
            <td>{booking.id}</td>
            <td>{booking.customer.name}</td>
            <td>{booking.tableNumber}</td>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td><a className="update-link" href={'/bookings/' + booking.id + '/edit'} >Update</a></td>
            <td><button onClick={handleDelete} className="trash-icon"><FontAwesomeIcon icon={faTrash} /></button></td>
            
            {/* <td></td> */}
        </tr>
    )
}

export default Booking;