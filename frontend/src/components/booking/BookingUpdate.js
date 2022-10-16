import React, { useState, useEffect } from "react";
import Request from "../../helpers/request";
import { useParams } from "react-router-dom";
import DuplicateChecker from "../../helpers/duplicateChecker";


const BookingUpdate = ({ customers, bookings }) => {


    const { id } = useParams();

    const [updatedBooking, setUpdatedBooking] = useState({});

    useEffect(() => {
        const request = new Request();
        request.get('/api/bookings/' + id)
            .then(data => setUpdatedBooking(data));
    }, []);

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfUpdatedBooking = { ...updatedBooking };
        copyOfUpdatedBooking[propertyName] = event.target.value;
        setUpdatedBooking(copyOfUpdatedBooking);
        if (document.getElementById("duplicate-error").hidden == false) {
            document.getElementById("duplicate-error").hidden = true
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const checker = new DuplicateChecker();
        if (checker.noDuplicatesExists(bookings, updatedBooking)) {
            const request = new Request();
            request.put("/api/bookings/" + id, updatedBooking)
                .then(() => {
                    window.location = '/bookings'
                });
        } else {
            document.getElementById("duplicate-error").hidden = false;
        }
    }

    const handleCustomerSelection = (event) => {
        const copyOfUpdatedBooking = { ...updatedBooking };
        copyOfUpdatedBooking.customer = customers[event.target.value - 1]
        setUpdatedBooking(copyOfUpdatedBooking);
    }

    const customerOptions = customers.map((customer, index) => {
        return <option value={customer.id} key={index}>{customer.name}</option>
    });

    return (Object.keys(updatedBooking).length == 0 || customers.length == 0) ? null : (

        <>
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
                <label>Table Number</label>
                <input type="number" name="tableNumber" value={updatedBooking.tableNumber} onChange={handleChange} />
                <label>Date</label>
                <input type="date" name="date" value={updatedBooking.date} onChange={handleChange} />
                <label>Time</label>
                <input type="time" name="time" value={updatedBooking.time} onChange={handleChange} />
                <label>Customer</label>
                <select name="customer" defaultValue={updatedBooking.customer.id} onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <input type="submit" value="Save" />
            </form>
            <div id="duplicate-error" hidden={true}>
                <p>Sorry, that table conflicts with a previous booking</p>
            </div>
        </>
    )

}

export default BookingUpdate;