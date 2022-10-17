import React from "react";
import './FloorPlan.css'
import CustomerForm from "../components/customer/CustomerForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns  } from '@fortawesome/free-solid-svg-icons';


const FloorPlan = () => {










    return (
        <>

        
        <section>
        {/* <h2 className="title">Floor Plan<FontAwesomeIcon icon={faTableColumns} className="icon" /></h2> */}
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
                        <td className="empty">

                        </td>
                        <td className="table">
                            <button className="dinamic">Table 1</button>
                        </td>
                        <td className="empty">

                        </td>
                        <td className="table">
                        <button className="dinamic">Table 2</button>
                        </td>
                        <td className="empty">

                        </td>
                    </tr>

                    <tr className="empty-row">
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                    </tr>

                    <tr>
                        <td className="empty">

                        </td>
                        <td className="table">
                        <button className="dinamic">Table 3</button>
                        </td>
                        <td className="empty">

                        </td>
                        <td className="table">
                        <button className="dinamic">Table 4</button>
                        </td>
                        <td className="empty">

                        </td>
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
        <CustomerForm/>
        </>

    )


}


export default FloorPlan;