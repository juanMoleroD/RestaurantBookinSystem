import React from "react";



const Booking = ({booking}) => {



        return(

            <>
               <p>{booking.tableNumber}</p> 
               <p>{booking.date}</p> 
               <p>{booking.time}</p> 
               <p>{booking.customer.name}</p>
               <p><a href="/id"> <b>Update</b></a></p>
            </>
        )

}

export default Booking;