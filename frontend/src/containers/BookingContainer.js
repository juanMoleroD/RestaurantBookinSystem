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

    const deleteBooking = (id) => {
        const copyOfBookings = [...bookings]
        let indexToDelete;
        copyOfBookings.forEach((booking, index) => {
            if(booking.id == id) {
                indexToDelete = index
            }
        })
        copyOfBookings.splice(indexToDelete, 1);
        setBookings(copyOfBookings);
    }


    
    return(

        <Routes>
            <Route path="/" element={<BookingList bookings={bookings} deleteBooking={deleteBooking}/> }/>
            <Route path="/new" element={<BookingForm/>} />
            <Route path="/:id/edit" element={<BookingUpdate/>}/>
        </Routes>
    )
}

export default BookingContainer;