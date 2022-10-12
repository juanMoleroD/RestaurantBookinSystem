import React from "react";
import Customer from "./Customer";

const CustomerList = ({customers}) => {

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