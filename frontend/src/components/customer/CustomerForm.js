import React, { useState } from "react";
import Request from "../../helpers/request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: ""
    });

    const onChange = (event) => {
        const targetName = event.target.name;
        const copyCustomer = { ...customer };
        copyCustomer[targetName] = event.target.value;
        setCustomer(copyCustomer)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        request.post('/api/customers', customer)
            .then(() => window.location = '/customers')
    }

    return (

        <div>
                  <h2 className="title">Add Customer<FontAwesomeIcon icon={faUserPlus} className="icon" /></h2>
            <form onSubmit={handleSubmit} className="form">
                <label><b>Name</b></label>
                <input type="text" placeholder="Name" name="name" value={customer.name} onChange={onChange} required/>
                <button type="submit"> Save </button>
            </form>
        </div>
    )
}

export default CustomerForm;