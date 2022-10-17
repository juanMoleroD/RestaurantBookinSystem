import React from "react";
import Customer from "./Customer";
import '../customer/customer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

const CustomerList = ({ customers, deleteCustomer }) => {

    if (!customers) {
        return <p> Loading... </p>
    }

    const customerNodes = customers.map((customer, index) => {
        return <Customer customer={customer} key={index} deleteCustomer={deleteCustomer} />
    })

    return (
        <>
         <h2 className="title">Customers<FontAwesomeIcon icon={faUserGroup} className="icon" /></h2>

            <table className="styled-table">
                <thead className="">
                    <tr className="table-columns">
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