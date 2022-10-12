
import React, {useState} from "react";
import Request from "../../helpers/request";

const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: ""
    });

    const onChange = (event) => {
        const targetName = event.target.name;
        const copyCustomer = {...customer};
        copyCustomer[targetName] = event.target.value;
        setCustomer(copyCustomer)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        request.post('/api/customers', {
            name: event.target.name.value
        })
            .then(() => {
                window.location = '/customers'
            })
    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label><b>Name</b></label>
                <input type="text" placeholder="Name" name="name" value={customer.name} onChange ={onChange} />
                <button type="submit"> Save </button>
            </form>

        </div>

    )
}


export default CustomerForm;