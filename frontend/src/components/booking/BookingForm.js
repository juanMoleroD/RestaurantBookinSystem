import React, { useState, useEffect } from "react";
import Request from "../../helpers/request";

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
    }

    const customerOptions = customers.map((customer, index) => {
        return <option value={index} key={index}>{customer.name}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (notDuplicatesBookings()) {
            const request = new Request();
            request.post("/api/bookings", newBooking)
                .then(() => {
                    window.location = '/bookings'
                }); 
        } else console.log("unable to book") // implement
    
    }
    const notDuplicatesBookings = () =>{
        let result = true
        bookings.forEach(booking => {
            if(booking.date == newBooking.date 
                && booking.tableNumber == newBooking.tableNumber 
                && checkTableOccupiedAtBookingTime(booking, newBooking)) 
                {
                    result = false;
            } 
        })
        return result
    }

    const checkTableOccupiedAtBookingTime = (booking, newBooking) => {
        let result = false;
        let now = new Date();

        const newBookingInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ... newBooking.time.split(":"))
        const newBookingInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ... newBooking.time.split(":"))
        newBookingInDateFormatPlusTwoHours.setHours(newBookingInDateFormatPlusTwoHours.getHours() + 2);

        const bookingInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...booking.time.split(":"));
        const bookingInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...booking.time.split(":"));
        bookingInDateFormatPlusTwoHours.setHours(bookingInDateFormatPlusTwoHours.getHours() + 2);

        if (bookingInDateFormat <= newBookingInDateFormat && newBookingInDateFormat < bookingInDateFormatPlusTwoHours ) result = true;
        if (bookingInDateFormat <= newBookingInDateFormatPlusTwoHours && newBookingInDateFormatPlusTwoHours < bookingInDateFormatPlusTwoHours ) result = true;
        return result;
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
        </>
    )

}

export default BookingForm;