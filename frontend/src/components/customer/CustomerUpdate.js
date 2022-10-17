import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Request from "../../helpers/request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const CustomerUpdate = () => {

    const { id } = useParams();

    const [customer, setCustomer] = useState({});

    useEffect(() => {
        const request = new Request();
        request.get('/api/customers/' + id)
            .then(data => {
                setCustomer(data);
            });
            // eslint-disable-next-line
    }, []);

    const onChange = (event) => {
        const targetName = event.target.name;
        const copyCustomer = { ...customer };
        copyCustomer[targetName] = event.target.value;
        setCustomer(copyCustomer)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        request.put('/api/customers/' + id, customer)
            .then(() => window.location = '/customers')
    }

    return (Object.keys(customer).length === 0) ? null : (
        <div>
         <h2 className="title">Update Customer<FontAwesomeIcon icon={faPenToSquare} className="icon" /></h2>
            <form onSubmit={handleSubmit} className="form">
                <label><b>Name</b></label>
                <input type="text" placeholder="Name" name="name" value={customer.name} onChange={onChange} />
                <button type="submit"> Save </button>
            </form>
        </div>
    )
}

export default CustomerUpdate;