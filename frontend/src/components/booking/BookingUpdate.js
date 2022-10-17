import React, { useState, useEffect } from "react";
import Request from "../../helpers/request";
import { useParams } from "react-router-dom";
import DuplicateChecker from "../../helpers/duplicateChecker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const BookingUpdate = ({ customers, bookings }) => {

    const {id} = useParams();

    const [updatedBooking, setUpdatedBooking] = useState({});

    useEffect(() => {
        const request = new Request();
        request.get('/api/bookings/' + id)
            .then(data => setUpdatedBooking(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfUpdatedBooking = { ...updatedBooking };
        copyOfUpdatedBooking[propertyName] = event.target.value;
        setUpdatedBooking(copyOfUpdatedBooking);
        if (document.getElementById("duplicate-error").hidden === false) {
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

    return (Object.keys(updatedBooking).length === 0 || customers.length === 0) ? null : (

        <>
             <h2 className="title">Update Booking<FontAwesomeIcon icon={faPenToSquare} className="icon" /></h2>
            <form onSubmit={handleSubmit} className="form">
                <label><b>Table Number</b></label>
                <input type="number" name="tableNumber" value={updatedBooking.tableNumber} onChange={handleChange} />
                <label><b>Date</b></label>
                <input type="date" name="date" value={updatedBooking.date} onChange={handleChange} />
                <label><b>Time</b></label>
                <input type="time" name="time" value={updatedBooking.time} onChange={handleChange} />
                <label><b>Customer</b></label>
                <select name="customer" defaultValue={updatedBooking.customer.id} onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <input type="submit" value="Save"  />
            </form>
            <div id="duplicate-error" hidden={true}>
                <p>Sorry, that table conflicts with a previous booking</p>
            </div>
        </>
    )

}

export default BookingUpdate;