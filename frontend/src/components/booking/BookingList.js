import React from "react";
import Booking from "./Booking";


const BookingList = ({bookings}) => {

    if(bookings.length === 0){
        return <p> Loading... </p>
    }
    
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