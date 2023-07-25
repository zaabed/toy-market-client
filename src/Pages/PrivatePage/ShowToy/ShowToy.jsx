import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowToy = ({ newToy, newToys, setNewToys }) => {

    const { _id, toyName, availableQuantity, photoURL, price, rating, sellerEmail, sellerName } = newToy;

    const handleToyDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this Toy",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-website-server.vercel.app/addToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )

                            const remaining = newToys.filter(nToy => nToy._id !== id);
                            setNewToys(remaining);

                        }
                    })
            }
        })
    }

    const handleDetailsToy = id => {
        console.log(id);
    }

    return (
        <div>
            <table className="table ">
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
                        <td><b>Name: {sellerName}</b></td>
                        <td>  <h1 className='font-bold'>{sellerEmail} </h1></td>
                        <td className='ms-20'><b>Price: ${price}</b></td>
                        <td className='ms-10'><b>Rating: {rating}</b></td>
                        <td>
                            <Link to={`/myToy/${_id}`}><button className="btn bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 btn-2xl">details</button></Link>
                        </td>
                        <th>
                            <Link to={`/updateToy/${_id}`}><button className='text-2xl'><FaEdit /></button></Link>
                        </th>
                        <th>
                            <button onClick={() => handleToyDelete(_id)} className='text-2xl'><FaTrash /></button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowToy;