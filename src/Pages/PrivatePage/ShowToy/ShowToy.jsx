import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const ShowToy = ({ newToy, newToys, setNewToys }) => {

    const { _id, toyName, availableQuantity, detailsDescription, photoURL, price, rating, sellerEmail, sellerName } = newToy;

    const handleToyDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this file",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = newToys.filter(nToy => nToy._id !== id);
                            setNewToys(remaining);

                        }
                    })
            }
        })
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
                            <button onClick={() => handleToyDelete(_id)} className='text-2xl'><FaTrash /></button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ShowToy;