import React from 'react';
import c1 from '../../../assets/images/c1.jpg';
import c2 from '../../../assets/images/c2.jpg';
import c3 from '../../../assets/images/c3.jpg';
import c4 from '../../../assets/images/c4.jpg';
import c5 from '../../../assets/images/c5.jpg';
import c6 from '../../../assets/images/c6.jpg';

const Gallery = () => {
    return (
        <div className='mt-10'>
            <p className='font-bold text-center'>SHOP <span className='text-red-600 '>TOY TITANS</span></p>
            <h1 className='mt-3 font-bold text-center text-5xl'>POPULAR IN<span className='text-purple-500'> OUR STORE</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center'>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Trucks</h2>
                        <p>$15</p>

                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Machine Wheel</h2>
                        <p>$19</p>

                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shovel</h2>
                        <p>$25</p>

                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Burnout Rescue</h2>
                        <p>$15</p>

                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ruler</h2>
                        <p>$11</p>

                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl mt-10">
                    <figure className="px-10 pt-10">
                        <img src={c6} alt="Shoes" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Toluca</h2>
                        <p>$17</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;