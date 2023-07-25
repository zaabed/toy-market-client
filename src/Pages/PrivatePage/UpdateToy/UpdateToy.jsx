import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const updateToy = useLoaderData();
    const { _id, availableQuantity, detailsDescription, price } = updateToy;

    const handleToyUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const availableQuantity = form.quantity.value;
        const price = form.price.value;
        const detailsDescription = form.details.value;
        const updatedToy = { availableQuantity, price, detailsDescription };
        // console.log(updateToy);
        fetch(`https://toy-market-website-server.vercel.app/addToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Toy information updated',
                        'success'
                    )
                }
            })
    }


    return (
        <div className="bg-amber-100 p-24">
            <h2 className="text-3xl font-extrabold mb-10">Update a Toy</h2>
            <form onSubmit={handleToyUpdate}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={availableQuantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={detailsDescription} placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block bg-amber-300" />
            </form>
        </div>
    );
};

export default UpdateToy;