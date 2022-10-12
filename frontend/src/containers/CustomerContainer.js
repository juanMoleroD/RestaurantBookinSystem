import React, { useEffect, useState } from "react";
import CustomerList from "../components/customer/CustomerList";
import Request from "../helpers/request";

const CustomerContainer = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('/api/customers')
        .then(data => setCustomers(data));
    }, [])

    return (

        <>
            <p>I am a customer container</p>
            <CustomerList customers={customers} />
        </>
    );
}

export default CustomerContainer;