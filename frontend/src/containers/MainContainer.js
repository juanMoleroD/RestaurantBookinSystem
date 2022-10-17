import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "../NavBar";
import Request from "../helpers/request";
import BookingContainer from "./BookingContainer";
import CustomerContainer from "./CustomerContainer";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const MainContainer = () => {

    const [bookings, setBookings] = useState([]);

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

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('/api/bookings')
        .then (data => setBookings(data));

        request.get('/api/customers')
            .then(fetchedCustomers => {
                const arrayOfCustomerBookingCountsPromises = fetchedCustomers.map(customer => {
                    return getBookingCountById(customer.id);
                });

                Promise.all(arrayOfCustomerBookingCountsPromises)
                    .then(fulfilledPromises => {

                        const updatedCustomers = fetchedCustomers.map((customer, index) => {
                            customer.bookingCount = fulfilledPromises[index];
                            return customer;
                        })
                        updatedCustomers.sort((a, b) => b.bookingCount - a.bookingCount);
                        setCustomers(updatedCustomers);
                    });
            });
    }, [])

    const getBookingCountById = (id) => {
        return fetch('/api/bookings/' + id + '/bookingcount')
            .then(response => response.json());
    }

    const deleteCustomer = (id) => {
        const copyOfCustomers = [...customers]
        let indexToDelete;
        copyOfCustomers.forEach((customer, index) => {
            if (customer.id == id) {
                indexToDelete = index
            }
        })
        copyOfCustomers.splice(indexToDelete, 1);
        setCustomers(copyOfCustomers);
    }

    return (!bookings || !customers) ? null: (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/bookings/*" element={<BookingContainer bookings={bookings} deleteBooking={deleteBooking} customers={customers}/>} />
                <Route path="/customers/*" element={<CustomerContainer customers={customers} deleteCustomer={deleteCustomer}/>} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </React.Fragment>
    )
}

export default MainContainer;