import React, { useState } from "react";
import './FloorPlan.css'


const FloorPlan = ({ filteredBookings, handleTableClick}) => {

    let a = function () {

    }
    const handleClick = (event) => {
        console.log(event.target)
        handleTableClick(event.target.value)
    }


    return (
        <>
            <section>
                <table className="floor-plan">
                    <tbody>
                        <tr className="empty-row">
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                        </tr>

                        <tr>
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(1)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" ><b>Table 1</b></button>
                                    </td>                      
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="1" onClick={handleClick} ><b>Table 1</b></button>
                                    </td>
                            }

                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(2)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" ><b>Table 2</b></button>
                                    </td>
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="2" onClick={handleClick} ><b>Table 2</b></button>
                                    </td>
                            }
                            <td className="empty"></td>
                        </tr>

                        <tr className="empty-row">
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                        </tr>

                        <tr>
                            <td className="empty"></td>
            
                            
                            {
                                (filteredBookings.includes(3)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" ><b>Table 3</b></button>
                                    </td>
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="3" onClick={handleClick} ><b>Table 3</b></button>
                                    </td>
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(4)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" ><b>Table 4</b></button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="4" onClick={handleClick} ><b>Table 4</b></button>
                                    </td>
                                

                                
                            }
                            <td className="empty"></td>
                        </tr>

                        <tr className="empty-row">
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )


}


export default FloorPlan;