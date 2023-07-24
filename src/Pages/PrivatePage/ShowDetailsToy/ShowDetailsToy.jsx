import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetailsToy = () => {

    const showDetailsToy = useLoaderData();
    const { toyName, detailsDescription, photoURL } = showDetailsToy;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2">
            <figure><img src={photoURL} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p><b>Details: </b>{detailsDescription}</p>
            </div>
        </div>
    );
};

export default ShowDetailsToy;