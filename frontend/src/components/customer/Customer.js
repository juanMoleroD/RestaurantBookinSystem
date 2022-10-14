import React from "react";

const Customer = ({ customer }) => {

    return (
        <>
            <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.bookingCount}</td>
            </tr>
        </>
    )
}

export default Customer;