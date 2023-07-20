import banner1 from '../../../assets/images/banner1.avif';
import banner2 from '../../../assets/images/banner2.avif';
import banner3 from '../../../assets/images/banner3.avif';
import banner4 from '../../../assets/images/banner4.avif';


const Home = () => {
    return (
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
    );
};

export default Home;