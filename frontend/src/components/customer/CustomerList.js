import React from "react";
import Customer from "./Customer";
import '../customer/customer-css.css'

const CustomerList = ({ customers }) => {

    if (!customers) {
        return <p> Loading... </p>
    }

    const customerNodes = customers.map((customer, index) => {
        return <Customer customer={customer} key={index} />
    })

    return (
        <>
            <table className="customer-table">
                <thead className="">
                    <th><b>Customer ID</b></th>
                    <th> <b>Name</b> </th>
                    <th> <b>Booking Count</b></th>
                </thead>
                {customerNodes}
            </table>
        </>
    )
}

export default CustomerList;