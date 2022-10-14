import React from "react";

const Customer = ({ customer }) => {

    const handleDelete = () => {

    }

    return (
        <>
            <tr>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.bookingCount}</td>
                <td><button><a href={'/customers/' + customer.id + '/edit'} >Update</a></button></td>
                <td><button onClick={handleDelete}>Delete</button></td>
            </tr>
        </>
    )
}

export default Customer;