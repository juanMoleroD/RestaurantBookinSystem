import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerList from "../components/customer/CustomerList";
import Request from "../helpers/request";
import CustomerForm from "../components/customer/CustomerForm";
import CustomerUpdate from "../components/customer/CustomerUpdate";

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
                        updatedCustomers.sort((a, b) => b.bookingCount - a.bookingCount);
                        setCustomers(updatedCustomers);
                    });
            });
    }, [])

    const getBookingCountById = (id) => {
        return fetch('api/bookings/' + id + '/bookingcount')
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

    return (

        <div>
            <Routes>
                <Route path="/" element={<CustomerList customers={customers}  deleteCustomer={deleteCustomer}/>} />
                <Route path="/new" element={<CustomerForm />} />
                <Route path="/:id/edit" element={<CustomerUpdate/> } />
            </Routes>
        </div>
    );
}

export default CustomerContainer;