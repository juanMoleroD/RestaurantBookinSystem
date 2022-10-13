import React, { useState, useEffect } from "react";
import Request from "../helpers/request";
import BookingList from "../components/booking/BookingList";
import { Route, Routes } from 'react-router-dom';
import BookingForm from "../components/booking/BookingForm";
import BookingUpdate from "../components/booking/BookingUpdate";


const BookingContainer = () =>{

    const [bookings, setBookings] = useState([]);

    useEffect (()=> {
        const request = new Request();
        request.get('/api/bookings')
        .then (data => setBookings(data));
    }, []);
    
    return(

        <Routes>
            <Route path="/" element={<BookingList bookings={bookings}/>}/>
            <Route path="/new" element={<BookingForm/>} />
            <Route path="/:id/edit" element={<BookingUpdate/>}/>
        </Routes>
    )
}

export default BookingContainer;