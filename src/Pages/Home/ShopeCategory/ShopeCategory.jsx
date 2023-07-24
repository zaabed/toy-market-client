import { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';


const ShopeCategory = () => {

    const [toys, setToys] = useState([]);
    // console.log(toys);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])


    return (
        <div className="mt-20">
            <h1 className='mt-3 font-bold text-center text-5xl'>FIND YOUR <span className='text-purple-500'>TOYS</span></h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center mt-10 gap-10'>
                {
                    toys.map(toy => <Toy

                        key={toy._id}
                        toy={toy}

                    ></Toy>)
                }
            </div>

        </div>
    );
};

export default ShopeCategory;