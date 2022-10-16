import React, { useState, useEffect } from "react";
import Request from "../helpers/request";
import BookingList from "../components/booking/BookingList";
import { Route, Routes } from 'react-router-dom';
import BookingForm from "../components/booking/BookingForm";
import BookingUpdate from "../components/booking/BookingUpdate";


const BookingContainer = ({bookings, deleteBooking, customers}) =>{


    return(

        <Routes>
            <Route path="/new" element={<BookingForm customers={customers} bookings={bookings}/>} />
            <Route path="/" element={<BookingList bookings={bookings} deleteBooking={deleteBooking} customers={customers}/> }/>
            <Route path="/:id/edit" element={<BookingUpdate customers={customers} bookings={bookings}/>}/>
        </Routes>
    )
}

export default BookingContainer;