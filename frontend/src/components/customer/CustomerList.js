import React from "react";
import Customer from "./Customer";

const CustomerList = ({customers}) => {

    if(customers.length === 0){
        return <p> Loading... </p>
    }

    const customerNodes = customers.map((customer, index) => {
        return <Customer customer={customer} key={index} />
    })

    return (
        <>
            <table>
                {customerNodes}
            </table>
        </>
    )
}

export default CustomerList;