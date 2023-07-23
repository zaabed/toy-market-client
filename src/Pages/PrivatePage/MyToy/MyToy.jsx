import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowToy from '../ShowToy/ShowToy';


const MyToy = () => {

    const newToys = useLoaderData();

    return (
        <div className='mt-20'>

            {
                newToys.map(newToy => <ShowToy

                    key={newToy._id}
                    newToy={newToy}

                ></ShowToy>)
            }

        </div>
    );
};

export default MyToy;