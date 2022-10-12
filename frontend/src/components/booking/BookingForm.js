import React, {useState, useEffect} from "react";
import Request from "../../helpers/request";

const BookingForm = () => {

    const [booking, setBooking] = useState({
        tableNumber: 0,
        date: "",
        time: "",
        customer: null
    });

    const handleChange = (event) => {
        console.log("handle change triggered")
        console.log(event)
        const propertyName = event.target.name;
        const copyOfBooking = {... booking};
        copyOfBooking[propertyName] = event.target.value;
        setBooking(copyOfBooking);
    }


    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const request = new Request();
        request.get('/api/customers')
        .then(data => setCustomers(data));
    }, []);

    const customerOptions = customers.map((customer, index) => {
            return <option value={index} key={index}>{customer.name}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const request = new Request();
        request.post("/api/bookings", booking)
        .then(() => window.location('/bookings'))
        
    }

    const handleCustomerSelection = (event) => {
        const copyOfBooking = {... booking};
        copyOfBooking.customer = customers[event.target.value]        
        setBooking(copyOfBooking);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Table Number</label>
                <input type="number" name="tableNumber" value={booking.tableNumber} onChange={handleChange}/>
                <label>Date</label>
                <input type="date" name="date" value={booking.date} onChange={handleChange}/>
                <label>Time</label>
                <input type="time" name="time" value={booking.time} onChange={handleChange}/>
                <label>Customer</label>
                <select name="customer" onChange={handleCustomerSelection}>
                    <option disabled value="select-customer">Select Customer</option>
                    {customerOptions}
                </select>
                <input type="submit" value="Save"/>
            </form>
        </>
    )

}

export default BookingForm;