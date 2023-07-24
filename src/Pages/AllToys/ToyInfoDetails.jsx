import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyInfoDetails = () => {
    const toyInfoDetails = useLoaderData();
    console.log(toyInfoDetails);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ToyInfoDetails;