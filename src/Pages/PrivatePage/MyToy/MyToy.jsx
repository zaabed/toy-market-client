import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowToy from '../ShowToy/ShowToy';


const MyToy = () => {

    const loadedNewToys = useLoaderData();
    const [newToys, setNewToys] = useState(loadedNewToys);

    return (
        <div className='mt-20'>

            {
                newToys.map(newToy => <ShowToy

                    key={newToy._id}
                    newToy={newToy}
                    newToys={newToys}
                    setNewToys={setNewToys}

                ></ShowToy>)
            }

        </div>
    );
};

export default MyToy;