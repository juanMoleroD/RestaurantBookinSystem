import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerList from "../components/customer/CustomerList";
import CustomerForm from "../components/customer/CustomerForm";
import CustomerUpdate from "../components/customer/CustomerUpdate";

const CustomerContainer = ({customers, deleteCustomer}) => {

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