import React, { useState, useEffect } from "react";
import Request from "../../helpers/request";

const BookingForm = ({ customers, bookings }) => {

    const [booking, setBooking] = useState({
        tableNumber: 0,
        date: "",
        time: "",
        customer: null
    });

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfBooking = { ...booking };
        copyOfBooking[propertyName] = event.target.value;
        setBooking(copyOfBooking);
    }

    const customerOptions = customers.map((customer, index) => {
        return <option value={index} key={index}>{customer.name}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (notDuplicatesBookings()) {
            const request = new Request();
            request.post("/api/bookings", booking)
                .then(() => {
                    window.location = '/bookings'
                }); 
        } else console.log("unable to book")
    
    }
    const notDuplicatesBookings = () =>{
        let result = true
        bookings.forEach(bookingElement => {
            if(bookingElement.tableNumber == booking.tableNumber && bookingElement.date == booking.date && bookingElement.time == booking.time + ":00") {
                result = false;
            } 
        })
        return result
    }

    const handleCustomerSelection = (event) => {
        const copyOfBooking = { ...booking };
        copyOfBooking.customer = customers[event.target.value]
        setBooking(copyOfBooking);
    }


    return (!customers) ? null : (
        <>
            <form onSubmit={handleSubmit}>
                <label>Table Number</label>
                <input type="number" name="tableNumber" value={booking.tableNumber} onChange={handleChange} required />
                <label>Date</label>
                <input type="date" name="date" value={booking.date} onChange={handleChange} required />
                <label>Time</label>
                <input type="time" name="time" value={booking.time} onChange={handleChange} required />
                <label>Customer</label>
                <select name="customer" defaultValue={"select-customer"} onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <input type="submit" value="Save" />
            </form>
        </>
    )

}

export default BookingForm;