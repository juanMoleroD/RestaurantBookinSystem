import React, { useState, useEffect } from "react";
import Request from "../helpers/request";
import BookingList from "../components/booking/BookingList";
import CustomerForm from "../components/customer/CustomerForm";



const BookingContainer = () =>{

    const [bookings, setBookings] = useState([]);

    useEffect (()=> {
        const request = new Request();
        request.get('/api/bookings')
        .then (data => {
            console.log(data)
            setBookings(data)
        });
    }, []);




    return(

        <>
            <BookingList bookings={bookings}/>
        </>
    )
}


export default BookingContainer;