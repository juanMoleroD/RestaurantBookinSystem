import React, { useState } from "react";
import Request from "../../helpers/request";
import DuplicateChecker from "../../helpers/duplicateChecker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

const BookingForm = ({ customers, bookings }) => {

    const [newBooking, setNewBooking] = useState({
        tableNumber: 0,
        date: "",
        time: "",
        customer: null
    });

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfNewBooking = { ...newBooking };
        copyOfNewBooking[propertyName] = event.target.value;
        setNewBooking(copyOfNewBooking);
        if (document.getElementById("duplicate-error").hidden === false) {
            document.getElementById("duplicate-error").hidden = true
        }
    }

    const customerOptions = customers.map((customer, index) => {
        return <option value={index} key={index}>{customer.name}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const checker = new DuplicateChecker();
        if (checker.noDuplicatesExists(bookings, newBooking)) {
            const request = new Request();
            request.post("/api/bookings", newBooking)
                .then(() => {
                    window.location = '/bookings'
                });
        } else {
            document.getElementById("duplicate-error").hidden = false;
        }
    }

    const handleCustomerSelection = (event) => {
        const copyOfNewBooking = { ...newBooking };
        copyOfNewBooking.customer = customers[event.target.value]
        setNewBooking(copyOfNewBooking);
    }


    return (!customers) ? null : (
        <>
        <h2 className="title">Add Booking<FontAwesomeIcon icon={faCalendarPlus} className="icon" /></h2>
            <form onSubmit={handleSubmit} className="form">
                <label><b>Table Number</b></label>
                <input type="number" name="tableNumber" value={newBooking.tableNumber} onChange={handleChange} required />
                <label><b>Date</b></label>
                <input type="date" name="date" value={newBooking.date} onChange={handleChange} required />
                <label><b>Time</b></label>
                <input type="time" name="time" value={newBooking.time} onChange={handleChange} required />
                <label><b>Customer</b></label>
                <select name="customer" defaultValue={"select-customer"} onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <button type="submit"> Save </button>
            </form>
            <div className="error-container">
            <div id="duplicate-error" hidden={true}>
                <p>Sorry, that table conflicts with a previous booking</p>
            </div>
            </div>
           
        </>
    )
}

export default BookingForm;