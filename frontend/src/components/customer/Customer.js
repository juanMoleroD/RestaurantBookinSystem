import React from "react";
import Request from "../../helpers/request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


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
                <td><a href={'/customers/' + customer.id + '/edit'} >Update</a></td>
                <td><button onClick={handleDelete} className="trash-icon"><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
        </>
    )
}

export default Customer;