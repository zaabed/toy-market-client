import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";


const MyToy = () => {
    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Picture</th>
                        <th>Toy Name</th>
                        <th>Available Quantity</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <h1 className='font-bold'>Mohiman Qubal</h1>
                        </td>
                        <td>Purple</td>
                        <td>Zabed</td>
                        <td>Email</td>
                        <td>Price</td>
                        <td>Rating</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                        <th>
                            <button className='text-2xl'><FaEdit /></button>
                        </th>
                        <th>
                            <button className='text-2xl'><FaTrash /></button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;