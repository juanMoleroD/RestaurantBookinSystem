import React, { useState, useEffect } from "react";
import Request from "../../helpers/request";
import { useParams } from "react-router-dom";


const BookingUpdate = () => {


    const { id } = useParams();

    const [booking, setBooking] = useState({});

    useEffect(() => {
        const request = new Request();
        request.get('/api/bookings/' + id)
            .then(data => setBooking(data));
    }, []);

    const handleChange = (event) => {
        const propertyName = event.target.name;
        const copyOfBooking = { ...booking };
        copyOfBooking[propertyName] = event.target.value;
        setBooking(copyOfBooking);
    }


    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('/api/customers')
            .then(data => setCustomers(data));
    }, []);


    

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        request.put("/api/bookings", booking)
            .then(() => {
                window.location = '/bookings'
            });
    }

    const handleCustomerSelection = (event) => {
        const copyOfBooking = { ...booking };
        copyOfBooking.customer = customers[event.target.value]
        setBooking(copyOfBooking);
    }

    // const getDefaultCustomer = () => {
    //     return customerOptions.indexOf(booking.customer);
    // }


    const customerOptions = customers.map((customer, index) => {
        return <option value={customer.id} key={index}>{customer.name}</option>
    });

    return (Object.keys(booking).length == 0 || customers.length == 0) ? null: (

        <>
            <h2>Update</h2>
            <form onSubmit={handleSubmit}>
                <label>Table Number</label>
                <input type="number" name="tableNumber" value={booking.tableNumber} onChange={handleChange} />
                <label>Date</label>
                <input type="date" name="date" value={booking.date} onChange={handleChange} />
                <label>Time</label>
                <input type="time" name="time" value={booking.time} onChange={handleChange} />
                <label>Customer</label>
                <select name="customer" defaultValue={booking.customer.id} onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <input type="submit" value="Save" />
            </form>
        </>
    )

}

export default BookingUpdate;