import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {


    return (
        <>
            <nav id="main-navbar">
                <h1 className="app-text">Restaurant Management App<FontAwesomeIcon icon={faUtensils} className="restaurant-icon"/></h1>
                <ul className="ul-navbar">
                    <li>
                    <a href="/home" className="nav-text">Home</a>
                    </li>
                    <li>
                    <a href="/bookings" className="nav-text">Bookings</a>
                    </li>
                    <li>
                    <a href="/customers" className="nav-text">Customers</a>
                    </li>
                    <li>
                    <a href="/customers/new" className="nav-text">New Customer</a>
                    </li>
                    <li>
                    <a href="/bookings/new" className="nav-text">New Booking</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;