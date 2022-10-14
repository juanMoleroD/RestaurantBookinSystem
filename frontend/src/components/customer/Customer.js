import React from "react";
import Request from "../../helpers/request";

const Customer = ({ customer, deleteCustomer }) => {

    const handleDelete = () => {
        const request = new Request();
        request.delete('/api/customers/' + customer.id);
        deleteCustomer(customer.id);

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