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
        .then(data => setCustomers(data));
    }, [])

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