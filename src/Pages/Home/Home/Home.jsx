import banner1 from '../../../assets/images/banner1.avif';
import banner2 from '../../../assets/images/banner2.avif';
import banner3 from '../../../assets/images/banner3.avif';
import banner4 from '../../../assets/images/banner4.avif';
import Gallery from '../Gallery/Gallery';
import ShopeCategory from '../ShopeCategory/ShopeCategory';
import p3 from '../../../assets/images/p3.jpg';
import p1 from '../../../assets/images/p1.jpg';
import vector1 from '../../../assets/images/vector1.svg';
import vector2 from '../../../assets/images/vector2.svg';
import vector3 from '../../../assets/images/vector3.svg';
import vector4 from '../../../assets/images/vector4.svg';
import Marquee from 'react-fast-marquee';
import brand1 from '../../../assets/images/brand1.webp';
import brand2 from '../../../assets/images/brand2.webp';
import brand3 from '../../../assets/images/brand3.webp';
import brand4 from '../../../assets/images/brand4.webp';




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

            <div className='mt-20'>
                <h1 className='text-3xl font-bold mb-7 text-center'><span className='text-purple-500'>Our Supports</span></h1>
                <div className=' grid grid-cols-1 lg:grid-cols-4 bg-purple-50 p-5'>
                    <div className="card lg:card-side">
                        <figure><img src={vector1} className='w-20 h-20' alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Live Support</h2>
                            <p>Online</p>
                        </div>
                    </div>
                    <div className="card lg:card-side ">
                        <figure><img src={vector2} className='w-20 h-20' alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Buyers Protection</h2>
                            <p>Guarantee</p>
                        </div>
                    </div>
                    <div className="card lg:card-side ">
                        <figure><img src={vector3} className='w-20 h-20' alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fast Shipment</h2>
                            <p>Express</p>
                        </div>
                    </div>
                    <div className="card lg:card-side ">
                        <figure><img src={vector4} className='w-20 h-20' alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Best Prices</h2>
                            <p>Affordable</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <Gallery></Gallery>
            </div>


            <div className='mt-20 grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={p3} className='rounded-lg' alt="" />
                </div>
                <div>
                    <p>CREATIVE APPROACH</p>
                    <h1 className='text-3xl font-bold mt-7'>We help you take care of the kids</h1>
                    <p className='mt-7'>Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>
                    <img src={p1} className='rounded-lg mt-20' alt="" />
                </div>
            </div>


            <ShopeCategory></ShopeCategory>


            <div className='mt-20 mb-10'>
                <h1 className='text-3xl text-center font-bold mb-10'>We work with the <span className='text-purple-500'>best brands</span></h1>
                <Marquee speed={80} className='gap-5' >
                    <div className="card w-96 h-32 bg-base-100 shadow-xl">
                        <figure><img src={brand1} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 h-32 bg-base-100 shadow-xl">
                        <figure><img src={brand2} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 h-32 bg-base-100 shadow-xl">
                        <figure><img src={brand3} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-96 h-32 bg-base-100 shadow-xl">
                        <figure><img src={brand4} alt="Shoes" /></figure>
                    </div>
                </Marquee>
            </div>

        </div>
    );
};

export default Home;