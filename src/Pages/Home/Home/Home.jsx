import banner1 from '../../../assets/images/banner1.avif';
import banner2 from '../../../assets/images/banner2.avif';
import banner3 from '../../../assets/images/banner3.avif';
import banner4 from '../../../assets/images/banner4.avif';


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
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;