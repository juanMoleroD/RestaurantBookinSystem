import React, { useState } from "react";
import './FloorPlan.css'


const FloorPlan = ({ filteredBookings, handleTableClick}) => {

    const handleClick = (event) => {
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
                                        <button className="table-occupied" >Table 1</button>
                                    </td>                      
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="1" onClick={handleClick} >Table 1</button>
                                    </td>
                            }

                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(2)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 2</button>
                                    </td>
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="2" onClick={handleClick} >Table 2</button>
                                    </td>
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(3)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 3</button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="3" onClick={handleClick} >Table 3</button>
                                    </td>
                                

                                
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(4)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 4</button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="4" onClick={handleClick} >Table 4</button>
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
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            <td className="empty"></td>
                            
                        </tr>

                        <tr>
                            <td className="empty"></td>
            
                            
                            {
                                (filteredBookings.includes(5)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 5</button>
                                    </td>
                                 : 
                                    <td className="free">
                                        <button className="table-free" value="5" onClick={handleClick} >Table 5</button>
                                    </td>
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(6)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 6</button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="6" onClick={handleClick} >Table 6</button>
                                    </td>
                                

                                
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(7)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 7</button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="7" onClick={handleClick} >Table 7</button>
                                    </td>
                                

                                
                            }
                            <td className="empty"></td>
                            {
                                (filteredBookings.includes(8)) ? 
                                    <td className="occupied">
                                        <button className="table-occupied" >Table 8</button>
                                    </td>

                                 : 
                                    <td className="free">
                                        <button className="table-free" value="8" onClick={handleClick} >Table 8</button>
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