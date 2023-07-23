import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const ShowToy = ({ newToy }) => {

    const { _id, toyName, availableQuantity, detailsDescription, photoURL, price, rating, sellerEmail, sellerName } = newToy;

    return (
        <div>
            <table className="table ">
                {/* <thead>
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
                </thead> */}

                <tbody>
                    <tr className='grid grid-cols-1 lg:grid-cols-10 shadow-xl mt-10'>
                        <td>
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <h1 className='font-bold'>{toyName}</h1>
                        </td>
                        <td><b>Quantity: {availableQuantity}</b></td>
                        <td>{sellerName}</td>
                        <td>  <h1 className='font-bold'>{sellerEmail} </h1></td>
                        <td className='ms-20'><b>Price: ${price}</b></td>
                        <td className='ms-10'><b>Rating: {rating}</b></td>
                        <td>
                            <button className="btn bg-amber-300 btn-2xl">details</button>
                        </td>
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

export default ShowToy;