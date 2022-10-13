import React from "react";

const Customer = ({ customer }) => {

    return (
        <>
            <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
            </tr>
        </>
    )
}

export default Customer;