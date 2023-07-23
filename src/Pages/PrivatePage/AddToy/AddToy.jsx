import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import swal from 'sweetalert';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const availableQuantity = form.quantity.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const detailsDescription = form.details.value;
        const photoURL = form.photo.value;
        const addNewToy = { toyName, availableQuantity, sellerName, sellerEmail, price, rating, detailsDescription, photoURL };
        // console.log(addNewToy);

        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addNewToy)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "New Toy Added Successfully",
                        icon: "success",
                    });
                }

                form.reset();

            })
    }

    return (
        <div className="bg-amber-100 p-24">
            <h2 className="text-3xl font-extrabold mb-10">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                            <input type="text" name="details" placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn btn-block bg-amber-300" />

            </form>
        </div>
    );
};

export default AddToy;