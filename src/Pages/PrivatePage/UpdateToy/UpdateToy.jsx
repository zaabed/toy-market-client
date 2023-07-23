import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {

    const updateToy = useLoaderData();
    // console.log(updateToy);

    return (
        <div className="bg-amber-100 p-24">
            <h2 className="text-3xl font-extrabold mb-10">Update a Toy</h2>
            <form>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={updateToy?.availableQuantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={updateToy?.price} placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="details" defaultValue={updateToy?.detailsDescription} placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Toy" className="btn btn-block bg-amber-300" />

            </form>
        </div>
    );
};

export default UpdateToy;