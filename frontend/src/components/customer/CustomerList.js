import React from "react";
import Customer from "./Customer";
import '../customer/customer.css'

const CustomerList = ({ customers, deleteCustomer }) => {

    if (!customers) {
        return <p> Loading... </p>
    }

    const customerNodes = customers.map((customer, index) => {
        return <Customer customer={customer} key={index} deleteCustomer={deleteCustomer} />
    })

    return (
        <>
            <table className="customer-table">
                <thead className="">
                    <tr>
                        <th><b>Customer ID</b></th>
                        <th> <b>Name</b> </th>
                        <th> <b>Booking Count</b></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customerNodes}
                </tbody>
            </table>
        </>
    )
}

export default CustomerList;