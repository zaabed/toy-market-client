import banner1 from '../../../assets/images/banner1.avif';
import banner2 from '../../../assets/images/banner2.avif';
import banner3 from '../../../assets/images/banner3.avif';
import banner4 from '../../../assets/images/banner4.avif';
import c1 from '../../../assets/images/c1.jpg';
import c2 from '../../../assets/images/c2.jpg';
import c3 from '../../../assets/images/c3.jpg';
import c4 from '../../../assets/images/c4.jpg';
import c5 from '../../../assets/images/c5.jpg';
import c6 from '../../../assets/images/c6.jpg';
import ShopeCategory from '../ShopeCategory/ShopeCategory';


const Home = () => {
    return (
        <div>
            <div className='mt-10'>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full h-[550px]">
                        <img src={banner1} className="w-full rounded-md" />
                    </div>
                    <div id="item2" className="carousel-item w-full h-[550px]">
                        <img src={banner2} className="w-full rounded-md" />
                    </div>
                    <div id="item3" className="carousel-item w-full h-[550px]">
                        <img src={banner3} className="w-full rounded-md" />
                    </div>
                    <div id="item4" className="carousel-item w-full h-[550px]">
                        <img src={banner4} className="w-full rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>

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

            {/* <div className='mt-20'>
                <h1 className='mt-3 font-bold text-center text-5xl'>OUR <span className='text-purple-500'>SERVICES</span></h1>
                <div>

                </div>
            </div> */}

            <ShopeCategory></ShopeCategory>

        </div>
    );
};

export default Home;