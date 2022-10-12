import React from "react";


const NavBar = () => {


    return (
        <>
            <nav id="main-navbar">
                <h1>Restaurant Management App</h1>
                <ul>
                    <li>
                        <a href="/home" >Home</a>
                    </li>
                    <li>
                        <a href="/bookings" >Bookings</a>
                    </li>
                    <li>
                        <a href="/customers" >Customers</a>
                    </li>
                    <li>
                        <a href="/bookings/new">New booking</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;