import React, { useState } from "react";
import Request from "../../helpers/request";
import DuplicateChecker from "../../helpers/duplicateChecker";

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
            <form onSubmit={handleSubmit}>
                <label>Table Number</label>
                <input type="number" name="tableNumber" value={newBooking.tableNumber} onChange={handleChange} required />
                <label>Date</label>
                <input type="date" name="date" value={newBooking.date} onChange={handleChange} required />
                <label>Time</label>
                <input type="time" name="time" value={newBooking.time} onChange={handleChange} required />
                <label>Customer</label>
                <select name="customer" defaultValue={"select-customer"} onChange={handleCustomerSelection}>
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

export default BookingForm;