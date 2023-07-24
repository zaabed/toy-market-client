import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetailsToy = () => {

    const showDetailsToy = useLoaderData();
    console.log(showDetailsToy);

    return (
        <div>
            <h1>This is new Details description</h1>
        </div>
    );
};

export default ShowDetailsToy;