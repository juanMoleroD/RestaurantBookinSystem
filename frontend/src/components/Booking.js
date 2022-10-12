import React from "react";


const Booking = ({booking}) => {



        return(

            <>
               <p>{booking.tableNumber}</p> 
               <p>{booking.date}</p> 
               <p>{booking.time}</p> 
               <p>{booking.customer.name}</p>
            </>
        )

}

export default Booking;