import React from "react";


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