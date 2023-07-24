import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowToy from '../ShowToy/ShowToy';


const MyToy = () => {

    const loadedNewToys = useLoaderData();
    const [newToys, setNewToys] = useState(loadedNewToys);

    return (
        <div className='mt-10'>

            <h1 className='text-3xl font-bold text-center mt-10'> Here My Added  <span className='text-purple-500'>New Toys</span></h1>

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