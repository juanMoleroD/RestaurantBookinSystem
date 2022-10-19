import React, { useState, useEffect } from "react";
import FloorPlan from "./FloorPlan";
import BookingAvailabilityFilter from "../components/booking/BookingAvailabilityFilter";
import CustomerForm from "../components/customer/CustomerForm";
import Request from "../helpers/request";
import DuplicateChecker from "../helpers/duplicateChecker";



const HomePage = ({ bookings, customers, updateCustomersAndBookings }) => {

    const [filteredBookings, setFilteredBookings] = useState([]);

    const [newBooking, setNewBooking] = useState({
        tableNumber: "",
        date: "",
        time: "",
        customer: null
    })

    useEffect(() => {
        customerOptions = updateCustomerOptions();
    }, [customers])

    useEffect(() => {
        handleFilterSubmit();
    }, [bookings])

    const handleFilterSubmit = () => {
        setFilteredBookings([]);
        const searchResults = bookings.filter(booking => {
            return (booking.date == newBooking.date
                && checkTables(booking))
        }).map(booking => booking.tableNumber);
        setFilteredBookings(searchResults);
    }

    const handleClear = (event) => {
        event.preventDefault();
        setNewBooking({
            tableNumber: "",
            date: "",
            time: "",
            customer: null
        });
        setFilteredBookings([]);
    }

    const checkTables = (existingBooking) => {
        let result = false;
        let now = new Date();

        const bookingToCheckInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...newBooking.time.split(":"))
        const bookingToCheckInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...newBooking.time.split(":"))
        bookingToCheckInDateFormatPlusTwoHours.setHours(bookingToCheckInDateFormatPlusTwoHours.getHours() + 2);

        const existingBookingInDateFormat = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...existingBooking.time.split(":"));
        const existingBookingInDateFormatPlusTwoHours = new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...existingBooking.time.split(":"));
        existingBookingInDateFormatPlusTwoHours.setHours(existingBookingInDateFormatPlusTwoHours.getHours() + 2);

        if (existingBookingInDateFormat <= bookingToCheckInDateFormat
            && bookingToCheckInDateFormat < existingBookingInDateFormatPlusTwoHours) result = true;
        if (existingBookingInDateFormat <= bookingToCheckInDateFormatPlusTwoHours
            && bookingToCheckInDateFormatPlusTwoHours < existingBookingInDateFormatPlusTwoHours) result = true;
        return result;
    }

    const handleTableClick = (tableNumber) => {
        const copyOfNewBooking = { ...newBooking };
        copyOfNewBooking.tableNumber = parseInt(tableNumber);
        setNewBooking(copyOfNewBooking);
    }

    const updateCustomerOptions = () => {
        return customers.map((customer, index) => {
            return <option value={index} key={index}>{customer.name}</option>
        });
    }

    let customerOptions = updateCustomerOptions();

    const handleCustomerSelection = (event) => {
        const copyOfNewBooking = { ...newBooking };
        copyOfNewBooking.customer = customers[event.target.value];
        setNewBooking(copyOfNewBooking);
    }

    const handleSubmit = (event) => {
        if (newBooking.tableNumber !== "" && newBooking.date !== "" && newBooking.time !== "" && newBooking.customer !== null) {
            const checker = new DuplicateChecker();
            if (checker.noDuplicatesExists(bookings, newBooking)) {
                const request = new Request();
                request.post('/api/bookings', newBooking)
                    .then(() => {
                        updateCustomersAndBookings();
                    });
            } else {
                window.alert("Conflict Booking")
            }
        } else {
            window.alert("Missing Data");
        }
    }

    return (

        <div className="home">
            <BookingAvailabilityFilter bookings={bookings} newBooking={newBooking} setNewBooking={setNewBooking} handleFilterSubmit={handleFilterSubmit} handleClear={handleClear}/>
            <div className="home-filter">
                { !customers ? null :
                     <select name="customer" defaultValue={"select-customer"} onChange={handleCustomerSelection}>
                         <option disabled value="select-customer">Select Customer</option>
                        {customerOptions}
                     </select>
                }
               
                <button className="add-booking" onClick={handleSubmit}>Add Booking</button>
            </div>
            <FloorPlan filteredBookings={filteredBookings} handleTableClick={handleTableClick} />
            <CustomerForm updateCustomers={updateCustomersAndBookings} />
        </div>
    )
}

export default HomePage;