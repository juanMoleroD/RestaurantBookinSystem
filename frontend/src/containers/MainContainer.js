import React from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "../NavBar";
import BookingContainer from "./BookingContainer";
import CustomerContainer from "./CustomerContainer";
import CustomerForm from "../components/customer/CustomerForm";

const MainContainer = () => {

    return (
        <React.Fragment>
            <NavBar />

            <Routes>
                <Route path="/bookings/*" element={<BookingContainer />} />
                <Route path ="/customers/*" element={<CustomerContainer />} />
                <Route path="/customers/new" element={<CustomerForm/>} />
                {/* <Route path="/bookings/new" element={<BookingForm/>} /> */}

            </Routes>

        </React.Fragment>

    )

}

export default MainContainer;