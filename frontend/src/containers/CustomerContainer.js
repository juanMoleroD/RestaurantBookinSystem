import React, { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
import CustomerList from "../components/customer/CustomerList";
import Request from "../helpers/request";
import CustomerForm from "../components/customer/CustomerForm";

const CustomerContainer = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const request = new Request();
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
                setCustomers(updatedCustomers);
            });
        });
    }, [])

    const getBookingCountById = (id) => {
        return fetch('api/bookings/'+ id+'/bookingcount')
        .then(response => response.json());
    }

    return (

        <div>
        <Routes>

        <Route path="/" element={<CustomerList customers={customers} />}/> 
        <Route path="/new" element={<CustomerForm/>}/> 

        </Routes>
   



        </div>
    );
}

export default CustomerContainer;