import React from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "../NavBar";
import BookingContainer from "./BookingContainer";

const MainContainer = () => {









    return (
        <React.Fragment>
            <NavBar />

            <Routes>
                <Route path="/bookings/*" element={<BookingContainer />} />
                {/* <Route path ="/customers/*" element={<CustomerContainer />} /> */}


            </Routes>

        </React.Fragment>




    )

}


export default MainContainer;