import React from "react";
import Booking from "./Booking";


const BookingList = ({bookings}) => {

    const bookingsNodes = bookings.map((booking, index) => {
            return <Booking booking = {booking} key = {index} />
    })
    
    return(
        <>
            <table>
                {bookingsNodes}
            </table>
        </>
    )
}

export default BookingList;