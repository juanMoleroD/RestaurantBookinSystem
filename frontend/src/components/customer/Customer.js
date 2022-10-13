import React from "react";

const Customer = ({customer}) => {

    
    return(
        <>
        <tr className="">
        <th><b>Customer ID</b></th>
        <th> <b>Name</b> </th>
        </tr>
        <tr>
            <td>{customer.id}</td>
            <td>{customer.name}</td>
        </tr>
        
        </>
    )
}

export default Customer;