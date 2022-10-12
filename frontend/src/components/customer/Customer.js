import React from "react";

const Customer = ({customer}) => {


    return(
        <>
            <p>{customer.id}</p>
            <p>{customer.name}</p>
        </>
    )
}

export default Customer;