import React from "react";
import FloorPlan from "./FloorPlan";
import BookingAvailabilityFilter from "../components/booking/BookingAvailabilityFilter";


const HomePage = ({bookings}) => {



    return (

        <div>
        <br></br>
            <BookingAvailabilityFilter bookings={bookings} />
            <FloorPlan/>
        </div>
    )
}

export default HomePage;